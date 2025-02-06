import type React from "react";

type Technology = {
    name: string;
    color: string;
};

type ProjectCardProps = {
    image: string;
    title: string;
    description: string;
    technologies: Technology[];
};

const ProjectCard: React.FC<ProjectCardProps> = ({ image, title, description, technologies }) => {
    const getDescriptionClass = () => {
        if (description.length > 200) return "text-xs";
        if (description.length > 100) return "text-sm";
        return "text-base";
    };

    return (
        <div className="max-w-sm h-full flex flex-col justify-between rounded overflow-hidden shadow-lg bg-[#00000080]">
            <img loading="lazy" className="w-full h-48 p-1 rounded-lg object-cover" src={image} alt={title} />
            <div className="px-6 py-4 flex-grow">
                <div className="font-bold text-xl mb-2 text-white">{title}</div>
                <p className={`text-[#ffffffef] ${getDescriptionClass()} line-clamp-4`}>{description}</p>
            </div>
            <div className="px-5 pt-1 pb-2">
                {technologies.map((tech, index) => (
                    <span
                        key={index}
                        className={`inline-block rounded-full px-3 py-1 text-sm font-semibold mr-2 mb-2 ${tech.color}`}
                    >
                        {tech.name}
                    </span>
                ))}
            </div>
        </div>
    );
};

export default ProjectCard;
