/* eslint-disable react/prop-types */
const About = ({ aboutReff }) => {
    const fromAboutReff = aboutReff;

    return (
        <div
            ref={fromAboutReff}
            className="flex flex-col gap-5 text-color-paragpraph px-5"
            id="about"
        >
            <p>
                Hello, I am Diva Marshelano Ardentinnova Suhartanto, an informatics student and junior web developer who has skills in both frontend and backend.
            </p>
            <p >
                I focus on developing react applications and integrating them with backend servers using the express framework or similar. With this ability, I develop projects for assignments and personal portfolios.
            </p>
        </div>
    );
};

export default About;
