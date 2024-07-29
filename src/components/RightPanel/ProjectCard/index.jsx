import image from "../../../../public/ss.png";
import sewaMobil from "../../../../public/sewa-mobil.png";
import donorkan from "../../../../public/donorkan.png";

// eslint-disable-next-line react/prop-types
const ProjectCard = ({ projectCardReff }) => {
  const data = [
    {
      id: 1,
      gambar: image,
      judul: "Portofolio",
      href : "https://github.com/shArdent/PortoDupe",
      description:
        "Portfolio using design from Brittany Chiang. Build with React js vite and Tailwind CSS and deployed with vercel.(not responsive yet)",
    },
    {
      id: 2,
      gambar: sewaMobil,
      judul: "Sewa-Mobil",
      href : "https://github.com/shArdent/sewa-mobil",
      description:
        "The car rental CRUD web application using Next.js, NextAuth, Supabase and Prisma ORM. This app manage CRUD operations for rental cars.",
    },
    {
      id: 3,
      gambar: donorkan,
      judul: "Donor-kan",
      href : "https://github.com/shArdent/ICONIC",
      description:
        "Web application to manage blood request and donation. Build with next JS, tailwind and TypeScript. (currently still in development)",
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
                  src={item.gambar}
                  alt="Thumbnail"
                  className="text-color-paragpraph text-xs mt-[5px] min-w-[7rem]"
                  width={100}
                  height={200}
                />
              </div>
              <div className="flex flex-col gap-3">
                <a href={item.href}className="text-color-highlight text-2xl group-hover:text-color-bubleText">
                  {item.judul}
                </a>
                <p className="text-color-paragpraph text-sm">
                  {item.description}
                </p>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default ProjectCard;
