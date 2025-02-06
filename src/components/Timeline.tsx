import React from "react";
import Headline from "./ui/Headline";
import Link from "./ui/Link";
import Section from "./ui/Section";
type TimelineItem = {
    date: string;
    title: string;
    description: string;
    link?: string;
};

type TimelineProps = {
    items: TimelineItem[];
};

const Timeline: React.FC<TimelineProps> = ({ items }) => {
    return (
        <Section id="work_experience">
            <div className="px-12">
                <Headline title="Work Experience" />
                <ol className="relative border-s border-gray-200 dark:border-gray-500">
                    {items.map((item, index) => (
                        <li key={index} className=" ms-4">
                            <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-500"></div>

                            <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
                                {item.date}
                            </time>

                            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">{item.title}</h3>

                            <p className="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">
                                {item.description}
                            </p>

                            <div className="pt-8">
                                {item.link && <Link href={item.link} text="View full resume" fixedWidth={12} />}
                            </div>
                        </li>
                    ))}
                </ol>
            </div>
        </Section>
    );
};

export default Timeline;
