import React, { useEffect, useRef, useState } from "react";

type TypingEffectProps = {
    text: string;
};

const TypingEffect: React.FC<TypingEffectProps> = ({ text }) => {
    const typingRef = useRef<HTMLDivElement | null>(null);
    const [wordsPerLine, setWordsPerLine] = useState(5); // Responsive words per line

    useEffect(() => {
        const updateWordsPerLine = () => {
            if (window.innerWidth < 640) setWordsPerLine(5); // Mobile
            else if (window.innerWidth < 1024) setWordsPerLine(10); // Tablet
            else setWordsPerLine(10); // Desktop
        };

        updateWordsPerLine();
        window.addEventListener("resize", updateWordsPerLine);
        return () => window.removeEventListener("resize", updateWordsPerLine);
    }, []);

    useEffect(() => {
        const typingElement = typingRef.current;
        if (!typingElement) return;

        typingElement.innerHTML = ""; // ✅ Clears previous text before re-typing
        let i = 0;
        let wordCount = 0;

        const typingInterval = setInterval(() => {
            if (!typingElement) return;

            if (text[i] === " ") wordCount++;

            typingElement.innerHTML += text[i] === " " ? "&nbsp;" : text[i];

            if (wordCount === wordsPerLine) {
                typingElement.innerHTML += "<br />";
                wordCount = 0;
            }

            i++;
            if (i === text.length) clearInterval(typingInterval);
        }, 100);

        return () => clearInterval(typingInterval); // ✅ Cleanup on unmount to prevent duplicate runs
    }, [text, wordsPerLine]);

    return (
        <div className="relative fade-in-from-bottom h-10 sm:h-20">
            <div
                ref={typingRef}
                className="absolute left-0 top-0 overflow-hidden border-r-white pr-1 text-md text-white font-bold"
            />
        </div>
    );
};

export default TypingEffect;
