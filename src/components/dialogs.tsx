import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Separator } from "@/components/ui/separator";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import type { ProjectCardItem, TeamCardItem } from "@/types";

import {
  AppWindow,
  ArrowRightIcon,
  GithubIcon,
  LinkedinIcon,
  MailIcon,
} from "lucide-react";
import { Fragment } from "react";

const mapIcon = {
  github: GithubIcon,
  linkedin: LinkedinIcon,
  email: MailIcon,
  other: AppWindow,
};

interface BiographyDialogProps {
  officer: TeamCardItem;
  links: { key: string; value: string }[];
}

const BiographyDialog: React.FC<BiographyDialogProps> = ({
  officer,
  links,
}) => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <h1 className="w-full h-full cursor-pointer hover:text-orange-600 hover:underline text-center">
          Read {officer.name.split(" ")[0]}'s Bio
        </h1>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>{officer.name}'s Bio</DialogTitle>
          <DialogDescription>{officer.role}</DialogDescription>
        </DialogHeader>
        <div className="flex flex-row justify-center gap-8 mx-10 text-md">
          <img
            loading="lazy"
            src={officer.image}
            alt={officer.name}
            className="w-40 h-40 rounded-full"
          />
        </div>
        <p className="leading-8">{officer.biography}</p>
        <Separator className="my-0" />
        <DialogFooter className="flex flex-row items-end justify-end gap-2">
          <div className="flex flex-row gap-4">
            {links.map(({ key, value }) => {
              const Icon = mapIcon[key as keyof typeof mapIcon];
              return (
                <a
                  key={key}
                  aria-label={key}
                  href={key === "email" ? `mailto:${value}` : value}
                  target={key === "email" ? "_self" : "_blank"}
                  title={key}
                  rel="noreferrer"
                >
                  <Icon className="w-5 h-5" />
                </a>
              );
            })}
          </div>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export const ProjectDialog: React.FC<ProjectCardItem> = ({
  title,
  description,
  github,
  live,
  images,
  video,
}) => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <h1 className="w-full h-full cursor-pointer hover:text-orange-600 hover:underline text-center">
          Learn more about {title}
        </h1>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader className="space-y-4 mb-2">
          <DialogTitle>{title}</DialogTitle>
        </DialogHeader>
        <div className="flex flex-col sm:flex-row">
          <div className="flex flex-col justify-center gap-8 mx-10 text-md">
            <Carousel>
              <CarouselContent className="w-full">
                {video && (
                  <>
                    <CarouselItem>
                      <video controls>
                        <source src={video} type="video/mp4" />
                      </video>
                    </CarouselItem>
                  </>
                )}
                {images.map((image, index) => (
                  <Fragment key={index}>
                    <CarouselItem key={image} className="md:max-h-[300px]">
                      <img
                        loading="lazy"
                        src={image}
                        alt={title}
                        className="w-full h-full object-cover"
                      />
                    </CarouselItem>
                  </Fragment>
                ))}
              </CarouselContent>
              <CarouselPrevious />
              <CarouselNext />
            </Carousel>
          </div>
        </div>
        <DialogDescription>{description}</DialogDescription>
        <Separator className="my-0" />
        <div className="flex flex-row gap-4 w-full justify-end">
          <TooltipProvider>
            {github && (
              <Tooltip>
                <TooltipTrigger>
                  <a
                    href={github}
                    target="_blank"
                    rel="noreferrer"
                    className="hover:text-orange-600"
                  >
                    <GithubIcon className="w-6 h-6" />
                  </a>
                </TooltipTrigger>
                <TooltipContent>
                  <p>Go to the GitHub repo</p>
                </TooltipContent>
              </Tooltip>
            )}
            {live && (
              <Tooltip>
                <TooltipTrigger>
                  <a
                    href={live}
                    target="_blank"
                    rel="noreferrer"
                    className="hover:text-orange-600"
                  >
                    <ArrowRightIcon className="w-6 h-6" />
                  </a>
                </TooltipTrigger>
                <TooltipContent>
                  <p>Go to live demo</p>
                </TooltipContent>
              </Tooltip>
            )}
          </TooltipProvider>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default BiographyDialog;
