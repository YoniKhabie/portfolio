import React from "react";
import { IconType } from "react-icons";
import { FaExternalLinkAlt } from "react-icons/fa";

type LinkProps = {
    href: string;
    text: string;
    fixedWidth?: number;
    icon?: IconType;
};

const Link: React.FC<LinkProps> = ({ href, text, fixedWidth, icon: Icon }) => {
    // const width = 10;
    return (
        <a
            href={href}
            target="_blank"
            className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800"
            style={fixedWidth ? { width: `${fixedWidth}rem` } : {}}
        >
            <span
                className="justify-center relative inline-flex items-center gap-x-2 px-1 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-[#00000080] rounded-md group-hover:bg-transparent group-hover:dark:bg-transparent"
                style={fixedWidth ? { width: `${fixedWidth - 0.1}rem` } : {}}
            >
                {text}
                {Icon ? <Icon className="w-4 h-4" /> : <FaExternalLinkAlt className="w-4 h-4" />}
            </span>
        </a>
    );
};

export default Link;
