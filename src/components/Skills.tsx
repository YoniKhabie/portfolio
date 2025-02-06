import { backendSkills, frontendSkills } from "../data/icons";
import "../style/animation.css";
import Headline from "./ui/Headline";
import Section from "./ui/Section";
import SkillsSection from "./ui/SkillSection";

export default function Skills() {
    return (
        <Section id="skills">
            <div className="px-12">
                <Headline title="My Skills" />
            </div>
            <div className="flex flex-col gap-8 sm:flex-row fade-in-from-bottom px-8">
                <SkillsSection title="Front-End" cardList={frontendSkills} />
                <SkillsSection title="Back-End" cardList={backendSkills} />
            </div>
        </Section>
    );
}
