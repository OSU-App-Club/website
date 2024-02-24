import BiographyDialog from "@/components/dialogs";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { cn } from "@/lib/utils";
import type { TeamCardItem } from "@/types";

interface TeamCardProps extends TeamCardItem {
  links: { key: string; value: string }[];
}

export default function TeamCard({
  name,
  role,
  image,
  biography,
  links,
}: TeamCardProps) {
  return (
    <>
      <Card
        className={cn(
          " group flex flex-col w-full  md:w-72 group/item transition-all"
        )}
      >
        <CardHeader>
          <div className="relative flex flex-row justify-center gap-4">
            <img src={image} alt={name} className="rounded-md mx-auto" />
            <div className="hidden group-hover:block absolute inset-0 dark:bg-black/80 bg-gray-50 bg-opacity-75 dark:bg-opacity-75 rounded-md shadow-md p-4 backdrop-blur-sm">
              <BiographyDialog
                officer={{ name, role, image, biography }}
                links={links}
              />
            </div>
          </div>
        </CardHeader>
        <CardContent className="flex flex-col justify-center mx-auto text-md text-center">
          <CardTitle className="text-xl font-medium">{name}</CardTitle>

          <CardDescription className="text-orange-600 font-sans text-sm">
            {role}
          </CardDescription>
        </CardContent>
      </Card>
    </>
  );
}
