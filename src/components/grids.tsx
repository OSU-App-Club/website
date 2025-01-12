import { ProjectCard } from "@/components/cards/project-card";
import { officerData, pastProjectsData, roadmapData } from "@/data";
import { convertLinksToObjects } from "@/lib/utils";
import type { TeamCardItem } from "@/types";
import { Fragment } from "react";
import TeamCard from "./cards/team-card";
import RoadmapCard from "./cards/roadmap-card";

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
                <ul className="flex gap-8 w-full flex-wrap md:flex-nowrap">
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

export const RoadmapOptionsGrid = () => {
    return (
        <div className="lg:gap-8 md:gap-4 gap-2 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
            {roadmapData.slice(0, 3).map((roadmap) => (
                <div key={roadmap.title}>
                    <RoadmapCard {...roadmap} />
                </div>
            ))}
        </div>
    );
};
