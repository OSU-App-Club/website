import BiographyDialog from "@/components/dialogs";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { cn } from "@/lib/utils";
import type { RoadmapCardItem } from "@/types";
import { Button } from "../ui/button";

export default function RoadmapCard({
  title,
  description,
  available,
  href,
}: RoadmapCardItem) {
  return (
    <>
      <Card
        className={cn(
          "group flex flex-col w-full p-2  md:w-full group/item transition-all",
        )}
      >
        <CardContent className="flex flex-col gap-3 justify-center mx-auto text-md text-center">
          <CardTitle className="text-orange-600 text-xl font-semibold">
            {title}
          </CardTitle>

          <CardDescription className="font-sans text-sm">
            {description}
          </CardDescription>

          <Button variant="default" disabled={!available} asChild>
            <a href={href}>View Roadmap</a>
          </Button>
        </CardContent>
      </Card>
    </>
  );
}
