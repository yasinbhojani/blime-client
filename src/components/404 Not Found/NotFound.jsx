import { useNavigate } from "react-router-dom";
import Button from "../UI/Buttons/Button";
import { ArrowRight } from "lucide-react";

const NotFound = () => {
  const redirect = useNavigate();
  return (
    <>
      <div className="w-full h-[90vh] flex justify-center items-center relative">
        <h1 className="text-[20rem] blur-[3px] text-[#252525] font-medium select-none">
          404
        </h1>
        <div className="absolute w-[35rem] text-center">
          <p className="text-[1.2rem]">
            Looks like you've ventured into the unknown! The route you're
            seeking seems to be on a cosmic detour. 🚀
          </p>
          <Button
            className={"m-auto mt-8 flex gap-3"}
            onClick={() => redirect("/")}
          >
            Beam me back home
            <ArrowRight width={20} />
          </Button>
        </div>
      </div>
    </>
  );
};
export default NotFound;
