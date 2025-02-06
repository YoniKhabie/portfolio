import { ReactNode } from "react";

type SectionProps = {
    id: "about" | "work_experience" | "projects" | "skills";
    children: ReactNode;
};

export default function Section({ id, children }: SectionProps) {
    return (
        <div id={id} className="relative isolate overflow-hidde py-12 sm:py-16">
            <div
                aria-hidden="true"
                className="hidden sm:absolute sm:-top-10 sm:right-1/2 sm:-z-10 sm:mr-10 sm:block sm:transform-gpu sm:blur-3xl"
            ></div>
            {children}
        </div>
    );
}
