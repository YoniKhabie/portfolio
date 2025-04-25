import { Dialog, DialogBackdrop, DialogPanel, DialogTitle } from "@headlessui/react";
import { dialogData } from "../../data/DialogData";
import Link from "./Link";

type DialogCompProps = {
    isOpen: boolean;
    setIsOpen: (open: boolean) => void;
};

const DialogComp: React.FC<DialogCompProps> = ({ isOpen, setIsOpen }) => {
    return (
        <Dialog open={isOpen} onClose={setIsOpen} className="relative z-10">
            <DialogBackdrop transition className="fixed inset-0 " />

            <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
                <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
                    <DialogPanel
                        transition
                        className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all data-closed:translate-y-4 data-closed:opacity-0 data-enter:duration-300 data-enter:ease-out data-leave:duration-200 data-leave:ease-in sm:my-8 sm:w-full sm:max-w-lg data-closed:sm:translate-y-0 data-closed:sm:scale-95"
                    >
                        <div className="bg-gray-900 px-4 pt-6 pb-4 sm:p-6 sm:pb-4 flex flex-col items-center">
                            <div className=" w-24 h-24 rounded-full p-[3px] bg-gradient-to-br from-purple-600 to-blue-500 shadow-lg mb-4">
                                <img
                                    src="/images/profile.jpeg"
                                    alt="Profile"
                                    className="w-full h-full rounded-full object-cover bg-white"
                                />
                            </div>

                            <DialogTitle as="h3" className="text-center text-base font-semibold text-white">
                                Thanks for taking the time to explore my work. If you're open to networking, I'd be
                                happy to connect on LinkedIn.
                            </DialogTitle>
                        </div>

                        <div className=" bg-gray-900 px-4 py-3 flex justify-center ">
                            <button type="button" onClick={() => setIsOpen(false)}>
                                <Link href={dialogData.link} text="Connect" icon={dialogData.icon} fixedWidth={7} />
                            </button>

                            <button type="button" onClick={() => setIsOpen(false)}>
                                <a
                                    target="_blank"
                                    className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 text-white focus:ring-4 focus:outline-none focus:ring-blue-300"
                                    style={{ width: `8rem` }}
                                >
                                    <span
                                        className="justify-center relative inline-flex items-center gap-x-2 px-1 py-2.5 transition-all ease-in duration-75 bg-[#00000080] rounded-md group-hover:bg-transparent"
                                        style={{ width: `8rem` }}
                                    >
                                        Maybe next time
                                    </span>
                                </a>
                            </button>
                        </div>
                    </DialogPanel>
                </div>
            </div>
        </Dialog>
    );
};

export default DialogComp;
