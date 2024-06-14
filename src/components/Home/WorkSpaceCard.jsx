import { Plus, Star } from "lucide-react";
import { useState } from "react";

const WorkSpaceCard = ({ item }) => {
  const [hover, setHover] = useState(false);

  if (item.createBtn) {
    return (
      <>
        <div
          className="relative px-4 py-2 pt-0 rounded-md shadow-md min-h-[120px] cursor-pointer flex justify-center items-center"
          onMouseEnter={() => setHover(true)}
          onMouseLeave={() => setHover(false)}
        >
          <div
            className="absolute inset-0 bg-no-repeat bg-cover transition duration-300 rounded-md"
            style={{
              backgroundColor: "#17202A",
              opacity: hover ? 0.4 : 0.7,
            }}
          ></div>
          <div className="relative z-10 flex-col justify-center items-center text-center">
            <Plus />
            <h1 className="shadow-2xl font-semibold">Create new board</h1>
          </div>
        </div>
      </>
    );
  }

  return (
    <>
      <div
        className="relative px-4 py-2 pt-0 rounded-md shadow-md min-h-[120px] cursor-pointer" //min-w-[240px]
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
      >
        <div
          className="absolute inset-0 bg-no-repeat bg-cover transition duration-300 rounded-md"
          style={{
            backgroundImage: `url(${item.background})`,
            backgroundColor: item.background,
            opacity: hover ? 0.4 : 0.7,
          }}
        ></div>
        <div className="relative z-10 flex justify-between items-center">
          <h1 className="shadow-2xl font-bold my-3">{item.board_name}</h1>
          <div className="flex items-center gap-3">
            {item.isReadOnly && (
              <p className="text-[0.8rem] bg-primary py-[3px] px-[12px] rounded-full shadow-sm">View Only</p>
            )}
            {hover && <Star size={18} />}
          </div>
        </div>
      </div>
    </>
  );
};
export default WorkSpaceCard;
