import "../../style/animation.css";

type HeadlineProps = {
    title: string;
};

const Headline: React.FC<HeadlineProps> = ({ title }) => {
    return (
        <h2 className="justify-start sm:justify-center flex font-semibold tracking-tight text-5xl py-8 sm:text-7xl fade-in-from-top text-[#ffffffef]">
            {title}
        </h2>
    );
};

export default Headline;
