import { useNavigate } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Button } from "antd";

const NotFound = () => {
  const redirect = useNavigate();
  return (
    <>
      <div className="w-full h-[90vh] flex flex-col justify-center items-center relative">
        <h1 className="lg:text-[20rem] text-[10rem] blur-[3px] text-[#252525] font-medium select-none">404</h1>
        <div className="lg:absolute lg:w-[35rem] w-[20rem] text-center">
          <p className="lg:text-[1.2rem]">
            Looks like you've ventured into the unknown! The route you're seeking seems to be on a cosmic detour. 🚀
          </p>
          <Button type="primary" className={"m-auto lg:mt-4 mt-12 flex gap-3"} onClick={() => redirect("/")}>
            Beam me back home
            <ArrowRight width={18} />
          </Button>
        </div>
      </div>
    </>
  );
};
export default NotFound;
