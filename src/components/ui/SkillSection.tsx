import React from "react";
import SkillCard, { SkillCardProps } from "./SkillCard";

type SkillsSectionProps = {
    cardList: SkillCardProps[];
    title: string;
};

const SkillsSection: React.FC<SkillsSectionProps> = ({ title, cardList }) => {
    return (
        <div className="flex-1 bg-[#00000080] p-4 rounded-2xl">
            <div className="flex flex-col">
                <h3 className="text-center text-gray-500 text-lg font-semibold opacity-50 mb-6">{title}</h3>

                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-3 gap-4">
                    {cardList.map((card, index) => (
                        <SkillCard key={index} icon={card.icon} name={card.name} />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default SkillsSection;
