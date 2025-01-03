import image from "/ss.png";
import sewaMobil from "/sewa-mobil.png";
import donorkan from "/donorkan.png";
import dawsavings from "/dawsavings.svg"

// eslint-disable-next-line react/prop-types
const ProjectCard = ({ projectCardReff }) => {
    const data = [
        {
            id: 1,
            gambar: image,
            judul: "Portfolio",
            href: "https://github.com/shArdent/PortoDupe",
            description:
                "Portfolio using design from Brittany Chiang. Build with React js vite and Tailwind CSS and deployed with vercel.",
        },
        {
            id: 2,
            gambar: sewaMobil,
            judul: "Sewa-Mobil",
            href: "https://github.com/shArdent/sewa-mobil",
            description:
                "The car rental CRUD web application using Next.js, NextAuth, Supabase and Prisma ORM. This app manage CRUD operations for rental cars.",
        },
        {
            id: 3,
            gambar: donorkan,
            judul: "Donor-kan",
            href: "https://github.com/shArdent/ICONIC",
            description:
                "Web application to manage blood request and donation. Built with next JS, tailwind and TypeScript.",
        },
        {
            id: 4,
            gambar: dawsavings,
            judul: "Daw Savings",
            href: "https://github.com/shArdent/DawSaving-Bun",
            description:
                "Mobile application to manage elementary school studnt's saving. This app created using react native expo and bun as run time."
        }
    ];

    const fromProjectCard = projectCardReff;
    return (
        <div ref={fromProjectCard}>
            <ul className="group/list">
                {data.map((item) => {
                    return (
                        <li
                            className="flex flex-col md-flex-row px-5 gap-10 mb-4 group hover:bg-color-paragpraph hover:!opacity-100 hover:bg-opacity-10 transition-all rounded py-3 cursor-pointer group-hover/list:opacity-50"
                            id="project"
                            key={item.id}
                        >
                            <div className="flex flex-col gap-3">
                                <a href={item.href} className="text-color-highlight text-3xl font-semibold group-hover:text-color-bubleText">
                                    {item.judul}
                                </a>
                                <img
                                    src={item.gambar}
                                    alt="Thumbnail"
                                    className="text-color-paragpraph text-xs mt-[5px] min-w-[7rem]"
                                    width={400}
                                />

                                <p className="text-color-paragpraph text-sm max-w-[400px]">
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
