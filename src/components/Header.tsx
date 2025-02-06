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
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="mx-auto max-w-2xl lg:mx-0">
                    <h1 className="text-5xl font-semibold tracking-tight text-white sm:text-7xl fade-in-from-top">
                        Yoni Ifrah
                    </h1>
                </div>
                <TypingEffect text={prompt} />
                <ul
                    role="list"
                    className="mt-30 flex flex-wrap justify-start gap-x-1 md:mt-10 sm:gap-y-4:mt-10 xl:col-span-2 "
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
