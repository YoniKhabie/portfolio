import type React from "react";
import { projectsData } from "../data/ProjectsData";
import Headline from "./ui/Headline";
import ProjectCard from "./ui/ProjectCard";
import Section from "./ui/Section";

const Projects: React.FC = () => {
    return (
        <Section id="projects">
            <div className="px-12">
                <Headline title="Recent Projects" />
                <div className="pt-2">
                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 place-items-center">
                        {projectsData.map((project, index) => (
                            <ProjectCard key={index} {...project} />
                        ))}
                    </div>
                </div>
            </div>
        </Section>
    );
};

export default Projects;
