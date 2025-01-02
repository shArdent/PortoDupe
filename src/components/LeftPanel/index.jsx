import { InstagramLogo, GithubLogo, Envelope, LinkedinLogo } from "@phosphor-icons/react";
import Foto from "../../assets/fotoFormal.svg"

import { HashLink as Link } from "react-router-hash-link";

// eslint-disable-next-line react/prop-types
const LeftPanel = ({ aboutIsInView, expIsInView, projectIsInView }) => {
    return (

        <div className="flex flex-col md:h-[100vh] pt-10 md:pt-0 h-full max-w-[100vw] md:px-10 px-5 relative md:sticky top-0 justify-center gap-6">
            <h1 className="text-color-highlight md:text-start text-center text-5xl font-bold mb-10">Portfolio Page</h1>
            <div className="flex md:flex-row flex-col h-100 gap-10">
                <img src={Foto} alt="Profile Picture" width={200} className="rounded self-center" />
                <div className="flex flex-col justify-evenly md:text-start text-center">
                    <div className="flex flex-col gap-2">
                        <h1 className="text-color-highlight text-4xl md:text-4xl font-bold">
                            Diva Marshelano AS
                        </h1>
                        <h3 className="text-color-lowerlight font-semibold text-lg">
                            Student of Siliwangi University
                        </h3>
                        <p className="text-color-paragpraph font-medium text-sm max-w-full">
                            Majoring in informatics
                            <br /> Faculty of Engineering.
                        </p>
                    </div>
                    <div className="text-color-paragpraph md:block hidden">
                        <ul className="flex flex-col gap-4 text-sm mt-3">
                            <li>
                                <Link
                                    to="#about"
                                    smooth
                                    className={`group flex flex-row items-center gap-4 hover:text-color-highlight font-medium ${aboutIsInView && "text-color-highlight"
                                        }`}
                                >
                                    <span
                                        className={`bg-color-paragpraph h-[1px] block group-hover:w-12 transition-all ${aboutIsInView ? "w-12" : "w-6"
                                            }`}
                                    ></span>
                                    <span>About</span>
                                </Link>
                            </li>
                            <li>
                                <Link
                                    to="#experience"
                                    smooth
                                    className={`group flex flex-row items-center gap-4 hover:text-color-highlight font-medium ${expIsInView && "text-color-highlight"
                                        }`}
                                >
                                    <span
                                        className={`bg-color-paragpraph h-[1px] block group-hover:w-12 transition-all ${expIsInView ? "w-12" : "w-6"
                                            }`}
                                    ></span>
                                    <span>Education</span>
                                </Link>
                            </li>
                            <li>
                                <Link
                                    to="#project"
                                    smooth
                                    className={`group flex flex-row items-center gap-4 hover:text-color-highlight font-medium ${projectIsInView && "text-color-highlight"
                                        }`}
                                >
                                    <span
                                        className={`bg-color-paragpraph h-[1px] block group-hover:w-12 transition-all ${projectIsInView ? "w-12" : "w-6"
                                            }`}
                                    ></span>
                                    <span>Project</span>
                                </Link>
                            </li>
                        </ul>
                    </div>

                </div>
            </div>
            <div className=" flex-col gap-2 flex">
                <h1 className="text-color-highlight text-2xl font-bold ">My Contact</h1>
                <div className="flex md:flex-row flex-col gap-3 md:gap-0 justify-between mt-3">
                    <div className="flex flex-col justify-between gap-3">
                        <a
                            href="https://www.instagram.com/divamarshelano/"
                            className="flex items-center gap-3 hover:text-color-highlight text-color-lowerlight"
                        >
                            <InstagramLogo size={32} color="#C4D0EC" />
                            @divamarshelano
                        </a>
                        <a href="https://github.com/shArdent" className="flex items-center gap-3 text-color-lowerlight hover:text-color-highlight">
                            <GithubLogo size={32} color="#C4D0EC" />
                            shArdent
                        </a>
                    </div>
                    <div className="flex flex-col justify-between gap-3">
                        <a href="https://mail.google.com/mail/?view=cm&to=dmarshelano@gmail.com" className="flex items-center gap-3 text-color-lowerlight hover:text-color-highlight">
                            <Envelope size={32} color="#C4D0EC" />
                            dmarshelano@gmail.com
                        </a>
                        <a href="https://www.linkedin.com/in/diva-marshelano-marshelano-suhartanto-5a6366276/" className="flex items-center gap-3 text-color-lowerlight hover:text-color-highlight">
                            <LinkedinLogo size={32} color="#C4D0EC" />
                            Diva Marshelano Ardentinnova Suhartanto
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LeftPanel;
