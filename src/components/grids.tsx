import { ProjectCard } from "@/components/cards/project-card";
import { officerData, pastProjectsData } from "@/data";
import { convertLinksToObjects } from "@/lib/utils";
import type { TeamCardItem } from "@/types";
import { Fragment } from "react";
import TeamCard from "./cards/team-card";

export const PastProjectsGrid = () => {
  return (
    <div className="container mx-auto my-6 lg:grid grid-cols-3 place-items-center gap-20">
      {pastProjectsData.map((project) => (
        <ProjectCard key={project.title} {...project} />
      ))}
    </div>
  );
};

export const LeadershipTeamGrid = () => {
  return (
    <>
      <div className="container -mx-3 my-6">
        <ul className="flex flex-wrap gap-8">
          {officerData.map(
            ({
              name,
              role,
              image,
              github,
              email,
              other,
              linkedin,
              biography,
            }: TeamCardItem) => {
              const allLinks: Record<string, string> = {
                github: github || "",
                email: email || "",
                linkedin: linkedin || "",
                other: other || "",
              };

              const links = convertLinksToObjects(allLinks);

              return (
                <Fragment key={name}>
                  <TeamCard
                    name={name}
                    role={role}
                    image={image}
                    biography={biography}
                    links={links}
                  />
                </Fragment>
              );
            }
          )}
        </ul>
      </div>
    </>
  );
};
