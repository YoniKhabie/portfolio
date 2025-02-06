import React from "react";
import Card, { CardProps } from "./Card"; // Assuming Card is in a separate file

type SkillsSectionProps = {
    cardList: CardProps[];
    title: string;
};

const SkillsSection: React.FC<SkillsSectionProps> = ({ title, cardList }) => {
    return (
        <div className="flex-1 bg-[#00000080] p-4 rounded-2xl">
            <div className="flex flex-col">
                {/* Centered title above the card list */}
                <h3 className="text-center text-lg font-semibold opacity-50 mb-6">{title}</h3>

                {/* Card list grid */}
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-3 gap-4">
                    {cardList.map((card, index) => (
                        <Card key={index} icon={card.icon} name={card.name} />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default SkillsSection;
