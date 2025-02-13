import { headerData } from "../data/HeaderData";
import "../style/animation.css";
import Link from "./ui/Link";
import Section from "./ui/Section";
import TypingEffect from "./ui/TypingEffect";

const prompt =
    "A Software Engineer skilled in TypeScript, React, Node.js, and Flutter. I build scalable web and mobile applications, focusing on clean code and great user experiences.";

export default function Header() {
    return (
        <Section id="about">
            <div className="mx-auto max-w-7xl px-6 ml-6.75 sm:ml-1 lg:px-16">
                <div className="mx-auto max-w-2xl lg:mx-0">
                    <h1 className="text-5xl font-semibold tracking-tight text-white sm:text-7xl fade-in-from-top">
                        Yoni Khabie
                    </h1>
                </div>
                <TypingEffect text={prompt} />
            </div>
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <ul
                    role="list"
                    className="justify-center mt-30 flex flex-wrap sm:justify-start gap-x-1 md:mt-10 sm:gap-y-4:mt-10 xl:col-span-2 "
                >
                    {headerData.map((image, index) => (
                        <li key={index} className="fade-in-from-bottom pt-2">
                            <Link key={index} href={image.link} text={image.alt} icon={image.icon} fixedWidth={9} />
                        </li>
                    ))}
                </ul>
            </div>
        </Section>
    );
}
