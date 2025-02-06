import { backendSkills, frontendSkills } from "../data/icons";
import "../style/animation.css";
import Section from "./ui/Section";
import SkillsSection from "./ui/SkillSection";

export default function Skills() {
    return (
        <Section id="skills">
            <h2 className="justify-center flex font-semibold tracking-tight underline underline-offset-8 text-5xl py-8 sm:text-7xl fade-in-from-top text-[#ffffffef]">
                My Stack
            </h2>
            <div className="flex flex-col gap-8 sm:flex-row fade-in-from-bottom px-8">
                <SkillsSection title="Front-End" cardList={frontendSkills} />
                <SkillsSection title="Back-End" cardList={backendSkills} />
            </div>
        </Section>
    );
}
