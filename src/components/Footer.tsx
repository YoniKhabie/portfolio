import React from "react";

const Footer: React.FC = () => {
    return (
        <footer className="m-4 backdrop-filter backdrop-blur-md bg-opacity-0 shadow-sm">
            <div className="mx-auto w-full max-w-screen-xl p-4 md:py-8">
                <h4 className="flex justify-center text-sm font-medium text-gray-500 opacity-60 transition duration-300 ease-in-out hover:opacity-100">
                    Built & Designed by Yoni Ifrah
                </h4>
                <hr className="my-6 sm:mx-auto lg:my-8 border-gray-700" />
            </div>
        </footer>
    );
};

export default Footer;
