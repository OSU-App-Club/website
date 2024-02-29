import { ProjectDialog } from "@/components/dialogs";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";
import { Separator } from "@/components/ui/separator";
import type { ProjectCardItem } from "@/types";

export const ProjectCard: React.FC<ProjectCardItem> = ({
  title,
  description,
  href,
  github,
  live,
  images,
  video,
  tags,
}) => {
  return (
    <Card className="flex flex-col w-full my-10 transition-all">
      <CardHeader>
        <CardTitle className="text-2xl text-center font-semibold ">
          {title}
        </CardTitle>
        <Separator className="my-0" />
        <HoverCard>
          <HoverCardTrigger className="text-center text-sm text-gradient_blaze-orange">
            Tech Stack <span className="text-[10px]">(hover)</span>
          </HoverCardTrigger>
          <HoverCardContent className="flex flex-row flex-wrap gap-2">
            {tags?.map((tag) => (
              <span
                key={tag}
                className="text-xs bg-slate-500 text-white px-2 py-1 rounded-md m-1"
                title={tag}
              >
                {tag}
              </span>
            ))}
          </HoverCardContent>
        </HoverCard>
      </CardHeader>
      <CardContent>
        <div className="relative flex flex-row justify-center gap-4 w-full group group/item">
          <AspectRatio ratio={16 / 9} className="w-full rounded-md">
            <img
              src={images[0]}
              alt={title}
              className="w-full h-full object-cover rounded-md"
            />
          </AspectRatio>
          <div className="hidden group-hover:block absolute inset-0 dark:bg-black/30 bg-gray-50 bg-opacity-50 dark:bg-opacity-50 rounded-md shadow-md p-4 backdrop-blur-sm">
            <ProjectDialog
              {...{ title, description, href, github, live, images, video }}
            />
          </div>
        </div>
      </CardContent>
    </Card>
  );
};
