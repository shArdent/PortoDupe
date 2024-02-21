import About from "./About";
import ExpCard from "./ExpCard";

import Footer from "./Footer";
import ProjectCard from "./ProjectCard";

const RightPanel = ({ expReff, aboutReff, projectReff }) => {
  return (
    <div className="w-[40vw] pt-36">
      <About aboutReff={aboutReff} />
      <ExpCard
        time={"July 2024 - july 2025"}
        place={"google.corp"}
        position={"FrontEnd Developer"}
        expCardReff={expReff}
      >
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusamus non
        est explicabo magnam id, eum laboriosam vitae quisquam tenetur rerum.
        Expedita suscipit delectus et maiores earum magni cum magnam provident!
        Necessitatibus eligendi, harum quos eos temporibus neque! Odit, eius ex,
        sapiente sint dolor deleniti officia, voluptates quia voluptatum sequi
        in numquam maiores? Voluptates laborum maiores, asperiores recusandae
        neque saepe sapiente! Minima nobis adipisci hic natus ad exercitationem
        velit explicabo consequuntur totam magni corporis maxime laborum
        reiciendis, unde sed! Tenetur, cupiditate placeat. Dolorem ipsum aperiam
        debitis
      </ExpCard>
      <ExpCard
        time={"July 2024 - july 2025"}
        place={"google.corp"}
        position={"FrontEnd Developer"}
        expCardReff={expReff}
      >
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusamus non
        est explicabo magnam id, eum laboriosam vitae quisquam tenetur rerum.
        Expedita suscipit delectus et maiores earum magni cum magnam provident!
        Necessitatibus eligendi, harum quos eos temporibus neque! Odit, eius ex,
        sapiente sint dolor deleniti officia, voluptates quia voluptatum sequi
        in numquam maiores? Voluptates laborum maiores, asperiores recusandae
        neque saepe sapiente! Minima nobis adipisci hic natus ad exercitationem
        velit explicabo consequuntur totam magni corporis maxime laborum
        reiciendis, unde sed! Tenetur, cupiditate placeat. Dolorem ipsum aperiam
        debitis
      </ExpCard>
      <h3
        href=""
        className="px-5 py-10 text-color-highlight hover:text-color-bubleText font-medium transition-all"
      >
        <a href="">View Full Resume</a>
      </h3>
      <ProjectCard projectCardReff={projectReff} />
      <Footer />
    </div>
  );
};

export default RightPanel;
