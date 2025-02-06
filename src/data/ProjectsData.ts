// Color mapping for technologies
const TECH_COLORS: Record<string, string> = {
    TypeScript: "bg-blue-900 text-white-800",
    "React Native": "bg-blue-100 text-blue-800",
    "React.js": "bg-blue-100 text-blue-800",
    Express: "bg-gray-100 text-gray-800",
    Flask: "bg-gray-100 text-gray-800",
    Prisma: "bg-gray-900 text-gray-100",
    "Next.js": "bg-gray-100 text-gray-800",
    "Node.js": "bg-green-800 text-gray-100",
    MongoDB: "bg-green-100 text-green-800",
    Flutter: "bg-blue-800 text-sky-100",
    Tailwind: "bg-cyan-600 text-white-100",
    Python: "bg-blue-700 text-yellow-300",
    Firebase: "bg-orange-200 text-red-700",
    Java: "bg-orange-200 text-red-900",
    Arduino: "bg-cyan-800 text-white-400",
};

// Get color by technology
const ColorByTech = (tech: string) => TECH_COLORS[tech] || TECH_COLORS["TypeScript"];

// Enum for tech names
enum Tech {
    RN = "React Native",
    React = "React.js",
    TS = "TypeScript",
    MongoDB = "MongoDB",
    Node = "Node.js",
    Flutter = "Flutter",
    Tailwind = "Tailwind",
    Python = "Python",
    Next = "Next.js",
    Express = "Express",
    Flask = "Flask",
    Firebase = "Firebase",
    Prisma = "Prisma",
    Arduino = "Arduino",
    Java = "Java",
}

// Project data
export const projectsData = [
    {
        image: "/images/pokeball.jpg",
        title: "Pokedex AI",
        description: "The user can search for a pokemon by capturing his image in order to get all his data about him",
        // technologies: Object.values(Tech).map((tech) => ({
        //     name: tech,
        //     color: ColorByTech(tech),
        // })),
        technologies: [
            { name: Tech.RN, color: ColorByTech(Tech.RN) },
            { name: Tech.TS, color: ColorByTech(Tech.TS) },
        ],
    },
    {
        image: "/images/airbnb.png",
        title: "Airbnb Clone",
        description:
            "A platform for renting and booking apartments worldwide. Including user authentication with nextauth, and image uploading by cloudinary.",
        technologies: [
            { name: Tech.Next, color: ColorByTech(Tech.Next) },
            { name: Tech.Tailwind, color: ColorByTech(Tech.Tailwind) },
            { name: Tech.MongoDB, color: ColorByTech(Tech.MongoDB) },
            { name: Tech.React, color: ColorByTech(Tech.React) },
            { name: Tech.Prisma, color: ColorByTech(Tech.Prisma) },
            { name: Tech.TS, color: ColorByTech(Tech.TS) },
        ],
    },
    {
        image: "/images/instagram.png",
        title: "Instagram Clone",
        description:
            "Social media application with user authentication where users can upload images and edit their profiles. The chat rooms are implemented with socket.Io and authentication is encrypted with JWT.",
        technologies: [
            { name: Tech.RN, color: ColorByTech(Tech.RN) },
            { name: Tech.MongoDB, color: ColorByTech(Tech.MongoDB) },
            { name: Tech.Node, color: ColorByTech(Tech.Node) },
            { name: Tech.Express, color: ColorByTech(Tech.Express) },

            { name: Tech.TS, color: ColorByTech(Tech.TS) },
        ],
    },
    {
        image: "/images/IoT-AI.png",
        title: "POC - Smart Fridge AI",
        description:
            "Mobile application that integrates with IoT system including artificial intelligence that detects and tracks your fridge products and their expiration dates by using fine-tuned DETR model trained with coco dataset I.E cnn model-based transformers.",
        technologies: [
            { name: Tech.Flutter, color: ColorByTech(Tech.Flutter) },
            { name: Tech.Python, color: ColorByTech(Tech.Python) },
            { name: Tech.Firebase, color: ColorByTech(Tech.Firebase) },
            { name: Tech.Arduino, color: ColorByTech(Tech.Arduino) },
        ],
    },
    {
        image: "/images/coronavirus.jpg",
        title: "Covid Simulator",
        description:
            "Simulate of the COVID-19 epidemic, built using Java. It incorporates Object-Oriented Programming (OOP), a graphical user interface (GUI), multithreading, and design patterns.",
        technologies: [{ name: Tech.Java, color: ColorByTech(Tech.Java) }],
    },
    {
        image: "/images/btc.png",
        title: "Crypto Signal",
        description:
            "With Binance & Telegram API, pandas and threading I was able to collect my data, add features and to scan the crypto market quickly, for each potential position the telegram bot will notify the user with the required details.",
        technologies: [{ name: Tech.Python, color: ColorByTech(Tech.Python) }],
    },
];
