import image from "../../../assets/ss.png";

const ProjectCard = ({ projectCardReff }) => {
  const data = [
    {
      id: 1,
      judul: "clone protofolio",
      description:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Similique corporis in ipsum amet, minus consequatur voluptates, veniam libero delectus beatae minima quibusdam cupiditate id, est corrupti accusamus perferendis provident maiores.",
    },
    {
      id: 2,
      judul: "clone protofolio",
      description:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Similique corporis in ipsum amet, minus consequatur voluptates, veniam libero delectus beatae minima quibusdam cupiditate id, est corrupti accusamus perferendis provident maiores.",
    },
    {
      id: 3,
      judul: "clone protofolio",
      description:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Similique corporis in ipsum amet, minus consequatur voluptates, veniam libero delectus beatae minima quibusdam cupiditate id, est corrupti accusamus perferendis provident maiores.",
    },
    {
      id: 4,
      judul: "clone protofolio",
      description:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Similique corporis in ipsum amet, minus consequatur voluptates, veniam libero delectus beatae minima quibusdam cupiditate id, est corrupti accusamus perferendis provident maiores.",
    },
    {
      id: 5,
      judul: "clone protofolio",
      description:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Similique corporis in ipsum amet, minus consequatur voluptates, veniam libero delectus beatae minima quibusdam cupiditate id, est corrupti accusamus perferendis provident maiores.",
    },
    {
      id: 6,
      judul: "clone protofolio",
      description:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Similique corporis in ipsum amet, minus consequatur voluptates, veniam libero delectus beatae minima quibusdam cupiditate id, est corrupti accusamus perferendis provident maiores.",
    },
    {
      id: 7,
      judul: "clone protofolio",
      description:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Similique corporis in ipsum amet, minus consequatur voluptates, veniam libero delectus beatae minima quibusdam cupiditate id, est corrupti accusamus perferendis provident maiores.",
    },
  ];

  const fromProjectCard = projectCardReff;
  return (
    <div ref={fromProjectCard}>
      <ul className="group/list">
        {data.map((item) => {
          return (
            <li
              className="flex px-5 gap-10 mb-4 group hover:bg-color-paragpraph hover:!opacity-100 hover:bg-opacity-10 transition-all rounded py-3 cursor-pointer group-hover/list:opacity-50"
              id="project"
              key={item.id}
            >
              <div>
                <img
                  src={image}
                  alt="Thumbnail"
                  className="text-color-paragpraph text-xs mt-[5px] min-w-[7rem]"
                  width={100}
                  height={200}
                />
              </div>
              <div className="flex flex-col gap-3">
                <h3 className="text-color-highlight text-2xl group-hover:text-color-bubleText">
                  {item.judul}
                </h3>
                <p className="text-color-paragpraph text-sm">
                  {item.description}
                </p>
              </div>
            </li>
          );
        })}
      </ul>
      <h3
        href=""
        className="px-5 py-10 text-color-highlight hover:text-color-bubleText font-medium transition-all"
      >
        <a href="">View Full Project Archieve</a>
      </h3>
    </div>
  );
};

export default ProjectCard;
