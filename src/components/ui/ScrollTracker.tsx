import React, { useEffect, useState } from "react";
import Confetti from "react-confetti";
import DialogComp from "./DialogComp";

const ScrollTracker: React.FC = () => {
    const [isBottom, setIsBottom] = useState(false);
    const [isTop, setIsTop] = useState(true);
    const [confettiVisible, setConfettiVisible] = useState(false);
    const [isDialogOpen, setIsDialogOpen] = useState(false);
    const [windowSize, setWindowSize] = useState({
        width: window.innerWidth,
        height: window.innerHeight,
    });
    const isMobile = windowSize.width <= 768;

    useEffect(() => {
        const handleResize = () => {
            setWindowSize({ width: window.innerWidth, height: window.innerHeight });
        };
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    useEffect(() => {
        const checkScrollPosition = () => {
            const atBottom = window.innerHeight + window.scrollY >= document.body.offsetHeight;
            const atTop = window.scrollY === 0;

            if (atBottom) {
                if (!isBottom && isTop) {
                    setConfettiVisible(true);
                    setIsDialogOpen(true);
                }
                setIsBottom(true);
                setIsTop(false);
            }

            if (atTop) {
                if (!isTop) {
                    setIsDialogOpen(false);
                }
                setIsTop(true);
                setIsBottom(false);
                setConfettiVisible(false);
            }
        };

        window.addEventListener("scroll", checkScrollPosition);
        return () => window.removeEventListener("scroll", checkScrollPosition);
    }, [isBottom, isTop]);

    return (
        <>
            {confettiVisible && (
                <div
                    style={{
                        position: "fixed",
                        bottom: 0,
                        width: "100%",
                        height: "100%",
                        pointerEvents: "none",
                        transform: "rotate(180deg)", // rotate canvas upside down
                        // transformOrigin: "bottom center",
                    }}
                >
                    <Confetti
                        width={windowSize.width}
                        height={windowSize.height * (isMobile ? 1 : 0.75)}
                        numberOfPieces={isMobile ? 150 : 300}
                        gravity={-0.3}
                        initialVelocityY={-50}
                        recycle={false}
                        run={true}
                    />
                </div>
            )}
            <DialogComp isOpen={isDialogOpen} setIsOpen={setIsDialogOpen} />
        </>
    );
};

export default ScrollTracker;
