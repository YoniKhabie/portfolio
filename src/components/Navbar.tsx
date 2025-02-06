const items = [
    {
        label: "About",
        href: "#about",
    },
    {
        label: "Skills",
        href: "#skills",
    },
    {
        label: "Work",
        href: "#work_experience",
    },
    {
        label: "Projects",
        href: "#projects",
    },
];

export default function Navbar() {
    return (
        <nav className=" py-4 backdrop-filter backdrop-blur-md sticky top-0 bg-opacity-0 z-50">
            <div className="container mx-auto flex justify-between items-center px-4 ">
                {/* Navigation Links */}
                <ul className="flex flex-1 justify-between space-x-4 px-5 sm:px-10">
                    {items.map((item, index) => (
                        <li key={index}>
                            <a
                                href={item.href}
                                className="text-white font-bold opacity-60 transition duration-300 ease-in-out hover:opacity-100"
                            >
                                {item.label}
                            </a>
                        </li>
                    ))}
                </ul>
            </div>
        </nav>
    );
}
