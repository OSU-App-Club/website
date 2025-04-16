import BiographyDialog, { MemberBiographyDialog } from "@/components/dialogs";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { cn } from "@/lib/utils";
import type { MemberCardItem } from "@/types";

interface MemberCardProps extends MemberCardItem {
  links: { key: string; value: string }[];
}

export default function MemberCard({
  name,
  image,
  biography,
  links,
}: MemberCardProps) {
  return (
    <Card
      className={cn(
        "group flex flex-col w-full sm:w-32 group/item transition-all hover:scale-105",
      )}
    >
      <CardHeader className="pt-3">
        <div className="relative flex flex-row justify-center gap-4">
          <img
            src={image}
            alt={name}
            className="rounded-md mx-auto w-20 h-20 object-cover"
          />
          <div className="hidden group-hover:block absolute inset-0 dark:bg-black/75 bg-gray-950/50 bg-opacity-75 dark:bg-opacity-75 rounded-md shadow-md p-4 backdrop-blur-sm">
            <MemberBiographyDialog
              member={{ name, image, biography }}
              links={links}
            />
          </div>
        </div>
      </CardHeader>
      <CardContent className="flex flex-col justify-center text-md text-center pb-3 px-2">
        <CardTitle className="text-md font-medium">{name}</CardTitle>
      </CardContent>
    </Card>
  );
}
