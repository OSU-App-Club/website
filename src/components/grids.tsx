import { ProjectCard } from "@/components/cards/project-card";
import { memberData, officerData, pastProjectsData } from "@/data";
import { convertLinksToObjects } from "@/lib/utils";
import type { MemberCardItem, TeamCardItem } from "@/types";
import { Fragment } from "react";
import TeamCard from "./cards/team-card";
import MemberCard from "./cards/member-card";

export const PastProjectsGrid = () => {
  return (
    <div className="lg:gap-8 md:gap-4 gap-0 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2">
      {pastProjectsData.slice(0, 8).map((project) => (
        <div key={project.title}>
          <ProjectCard {...project} />
        </div>
      ))}
    </div>
  );
};

export const LeadershipTeamGrid = () => {
  return (
    <>
      <div className="container -mx-3 my-6">
        <ul className="flex gap-8 w-full justify-center flex-wrap">
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
            },
          )}
        </ul>
      </div>
    </>
  );
};

export const MemberGrid = () => {
  return (
    <>
      <div className="container">
        <ul className="flex gap-2 w-full justify-center flex-wrap">
          {memberData.map(
            ({
              name,
              image,
              github,
              email,
              other,
              linkedin,
              biography,
            }: MemberCardItem) => {
              const allLinks: Record<string, string> = {
                github: github || "",
                email: email || "",
                linkedin: linkedin || "",
                other: other || "",
              };

              const links = convertLinksToObjects(allLinks);

              return (
                <Fragment key={name}>
                  <MemberCard
                    name={name}
                    image={image}
                    biography={biography}
                    links={links}
                  />
                </Fragment>
              );
            },
          )}
        </ul>
      </div>
    </>
  );
};
