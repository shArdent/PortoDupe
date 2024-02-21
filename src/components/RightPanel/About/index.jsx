const About = ({aboutReff}) => {

  const fromAboutReff = aboutReff

  return (
    <div ref={fromAboutReff} className="flex flex-col gap-5 text-color-paragpraph mb-16 px-5" id="about">
      <p>
        My main focus these day is learning frameworks, libraries and databases
        to improve my skill as a web developer. I'd really like to learn
        something new, Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Placeat officia, aliquid animi soluta rem, perferendis, mollitia ex
        consequatur voluptates vel quo nam officiis impedit temporibus possimus
        deleniti facilis natus cum.
      </p>
      <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. A doloremque
        consequuntur sed iusto assumenda culpa inventore amet aliquam possimus
        obcaecati qui, suscipit praesentium laudantium ut! Itaque, repellat
        quod! Nemo, eaque! Lorem ipsum dolor sit amet consectetur adipisicing
        elit. Possimus rerum iste quas cum officiis officia saepe iusto, id
        esse! Corporis neque tenetur aperiam adipisci deleniti in vero deserunt
        maxime. Praesentium.
      </p>
      <p>
        In my free time, I usually play some games, watching movies, hanging out
        with my friends, or clean my room
      </p>
    </div>
  );
};

export default About;
