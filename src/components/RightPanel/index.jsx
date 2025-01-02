import ContactFooter from "../ContactFooter";
import About from "./About";
import ExpCard from "./ExpCard";

import Footer from "./Footer";
import ProjectCard from "./ProjectCard";

// eslint-disable-next-line react/prop-types
const RightPanel = ({ expReff, aboutReff, projectReff }) => {
    return (
        <div className="md:w-[40vw] w-full px-5 md:pt-14 flex flex-col gap-5">
            <h1 className="text-color-highlight hover:text-color-bubleText font-bold transition-all text-3xl">About Me</h1>
            <About aboutReff={aboutReff} />
            <h3 className="text-color-highlight hover:text-color-bubleText font-medium transition-all text-3xl">
                Education
            </h3>
            <ExpCard
                time={"April 2024 - June 2024"}
                place={"Siliwangi University"}
                position={"Bootcamp Web Development"}
                expCardReff={expReff}
                bubbleText={["HTML", "CSS", "JavaScript"]}
            >
                Participating in a web development bootcamp was a transformative experience that significantly boosted my skills and confidence in the field. The intensive, hands-on nature of the program ensured that I quickly learned and applied new concepts, from front-end technologies like HTML, CSS, and JavaScript.
            </ExpCard>

            <ExpCard
                time={"August 2023 - now"}
                place={"Siliwangi University"}
                position={"Informatics Student"}
                expCardReff={expReff}
            >
                Developed knowledge in information technology and programming, with a focus on web development. Actively participated in various projects and activities to enhance practical skills in the technology field.
            </ExpCard>
            <h3 className="text-3xl text-color-highlight hover:text-color-bubleText font-medium transition-all">
                Project
            </h3>
            <ProjectCard projectCardReff={projectReff} />
            <Footer />
        </div>
    );
};

export default RightPanel;
