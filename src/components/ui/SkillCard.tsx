import React from "react";
import { IconType } from "react-icons";

export type SkillCardProps = {
    icon: IconType;
    name?: string;
};

const SkillCard: React.FC<SkillCardProps> = ({ icon: Icon, name = "Default Title" }) => {
    return (
        <div className="flex flex-col items-center space-y-2">
            <Icon className="text-white h-6 w-6" />
            <div className="space-y-6">
                <p className="text-white">{name}</p>
            </div>
        </div>
    );
};

export default SkillCard;
