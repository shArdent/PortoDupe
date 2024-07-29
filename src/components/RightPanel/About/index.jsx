/* eslint-disable react/prop-types */
const About = ({ aboutReff }) => {
  const fromAboutReff = aboutReff;

  return (
    <div
      ref={fromAboutReff}
      className="flex flex-col gap-5 text-color-paragpraph mb-16 px-5"
      id="about"
    >
      <p>
        I am currently focused on learning frameworks, libraries, and databases
        to enhance my skills as a web developer. Passionate about technology, I
        am always eager to dive into new tools and methodologies that can help
        me grow professionally. This continuous learning process allows me to
        stay updated with the latest trends and advancements in the web
        development industry, ensuring that I can create efficient and
        innovative solutions.
      </p>
      <p>
        In addition to my professional pursuits, I have a variety of hobbies
        that I engage in during my free time. Playing games is one of my
        favorite pastimes, as it not only provides entertainment but also
        sharpens my problem-solving skills and strategic thinking. Watching
        movies is another way I unwind, offering a chance to experience
        different stories and perspectives. Hanging out with friends is an
        important aspect of my life, as it helps me maintain strong social
        connections and enjoy memorable experiences together.
      </p>
    </div>
  );
};

export default About;
