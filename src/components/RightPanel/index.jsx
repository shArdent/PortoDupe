import About from "./About";
import ExpCard from "./ExpCard";

import Footer from "./Footer";
import ProjectCard from "./ProjectCard";

// eslint-disable-next-line react/prop-types
const RightPanel = ({ expReff, aboutReff, projectReff }) => {
  return (
    <div className="w-[40vw] pt-36">
      <About aboutReff={aboutReff} />
      <h3 className="px-5 py-10 text-color-highlight hover:text-color-bubleText font-medium transition-all">
        Education
      </h3>
      <ExpCard
        time={"April 2024 - June 2024"}
        place={"Universitas Siliwangi"}
        position={"Bootcamp Web Development"}
        expCardReff={expReff}
      >
        Participating in a web development bootcamp was a transformative experience that significantly boosted my skills and confidence in the field. The intensive, hands-on nature of the program ensured that I quickly learned and applied new concepts, from front-end technologies like HTML, CSS, and JavaScript.
      </ExpCard>
      <h3 className="px-5 py-10 text-color-highlight hover:text-color-bubleText font-medium transition-all">
        Project
      </h3>
      <ProjectCard projectCardReff={projectReff} />
      <Footer />
    </div>
  );
};

export default RightPanel;
