import {
  InstagramLogo,
  GithubLogo,
  LinkedinLogo,
  FacebookLogo,
} from "@phosphor-icons/react";

import { HashLink as Link } from "react-router-hash-link";

const LeftPanel = ({ aboutIsInView, expIsInView, projectIsInView }) => {
  return (
    <div className="flex flex-col gap-[3rem] h-[100vh] max-w-[100vw] sticky top-0 pt-36">
      <div className="flex flex-col gap-2">
        <h1 className="text-color-highlight text-4xl font-bold">
          Diva Marshelano
        </h1>
        <h3 className="text-color-lowerlight font-semibold text-lg">
          Student of Siliwangi University
        </h3>
        <p className="text-color-paragpraph font-medium text-sm max-w-[50%]">
          Majoring in informatics, Faculty of Engineering.
        </p>
      </div>
      <div className="text-color-paragpraph">
        <ul className="flex flex-col gap-4 text-sm">
          <li>
            <Link
              to="#about"
              smooth
              className={`group flex flex-row items-center gap-4 hover:text-color-highlight font-medium ${aboutIsInView && "text-color-highlight"}`}
            >
              <span
                className={`bg-color-paragpraph h-[1px] block group-hover:w-12 transition-all ${aboutIsInView ? "w-12" : "w-6"}`}
              ></span>
              <span>About</span>
            </Link>
          </li>
          <li>
            <Link
              to="#experience"
              smooth
              className={`group flex flex-row items-center gap-4 hover:text-color-highlight font-medium ${expIsInView && "text-color-highlight"}`}
            >
              <span className={`bg-color-paragpraph h-[1px] block group-hover:w-12 transition-all ${expIsInView ? "w-12" : "w-6"}`}></span>
              <span>Experience</span>
            </Link>
          </li>
          <li>
            <Link
              to="#project"
              smooth
              className={`group flex flex-row items-center gap-4 hover:text-color-highlight font-medium ${projectIsInView && "text-color-highlight"}`}
            >
              <span className={`bg-color-paragpraph h-[1px] block group-hover:w-12 transition-all ${projectIsInView ? "w-12" : "w-6"}`}></span>
              <span>Project</span>
            </Link>
          </li>
        </ul>
      </div>
      <div className="flex gap-4">
        <a href="" className="hover:text-color-highlight">
          <InstagramLogo size={32} color="#C4D0EC" />
        </a>
        <a href="">
          <GithubLogo size={28} color="#C4D0EC" />
        </a>
        <a href="">
          <LinkedinLogo size={32} color="#C4D0EC" />
        </a>
        <a href="">
          <FacebookLogo size={32} color="#C4D0EC" />
        </a>
      </div>
    </div>
  );
};

export default LeftPanel;
