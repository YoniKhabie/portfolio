import React from "react";
import { IconType } from "react-icons";

export type CardProps = {
    icon: IconType;
    name?: string;
};

const Card: React.FC<CardProps> = ({ icon: Icon, name = "Default Title" }) => {
    return (
        <div className="flex flex-col items-center space-y-2">
            <Icon className="h-6 w-6" />
            <div className="space-y-6">
                <p>{name}</p>
            </div>
        </div>
    );
};

export default Card;
