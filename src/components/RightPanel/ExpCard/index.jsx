import Bubble from "./Bubble";

const ExpCard = (props) => {
  const { time, place, position, children, expCardReff } = props;

  const fromExpCard = expCardReff;
  return (
    <div className="mb-4" id="experience" ref={fromExpCard}>
      <div
        hfref=""
        className="group flex gap-10 hover:bg-color-paragpraph hover:bg-opacity-10 transition-all rounded py-3 px-5 cursor-pointer"
      >
        <p className="text-color-paragpraph text-xs mt-[5px] w-[7rem]">
          {time}
        </p>
        <div className="flex flex-col max-w-[70%] gap-5">
          <a
            href=""
            className="text-color-highlight text-2xl group-hover:text-color-bubleText"
          >
            {position} - {place}
          </a>
          <p className="text-color-paragpraph text-sm">{children}</p>
          <div className="flex flex-wrap gap-2 max-w-[40vw]">
            <Bubble text={"JavaScript"} />
            <Bubble text={"C++"} />
            <Bubble text={"TypeScript"} />
            <Bubble text={"Next.JS"} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExpCard;
