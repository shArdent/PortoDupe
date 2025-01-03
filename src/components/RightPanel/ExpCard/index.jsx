import Bubble from "./Bubble";

// eslint-disable-next-line react/prop-types
const ExpCard = ({ time, place, position, children, expCardReff, bubbleText }) => {
    const fromExpCard = expCardReff;
    return (
        <div className="mb-4" id="experience" ref={fromExpCard}>
            <div className="flex flex-col md:flex-row md:gap-10 gap-3 hover:bg-color-paragpraph hover:bg-opacity-10 transition-all rounded py-3 px-5 cursor-pointer">
                <p className="text-color-paragpraph hidden md:block text-xs mt-[5px] md:w-[7rem]">
                    {time}
                </p>
                <div className="flex flex-col md:max-w-[70%] gap-5">
                    <div className="flex flex-col gap-2">
                        <div className="text-color-highlight text-2xl group-hover:text-color-bubleText">
                            {position} - {place}
                        </div>
                        <p className="text-color-paragpraph block md:hidden text-xs md:w-[7rem]">
                            {time}
                        </p>
                    </div>
                    <p className="text-color-paragpraph text-sm">{children}</p>
                    <div className="flex flex-wrap gap-2 max-w-[40vw]">
                        {bubbleText &&
                            bubbleText.map((e) => { return <Bubble text={e} /> })
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ExpCard;
