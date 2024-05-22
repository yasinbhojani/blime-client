import { useNavigate } from "react-router-dom";
import { generateRandomNoFromRange } from "../../../utils/utils";

const AlreadyHaveAcc = () => {
  const navigate = useNavigate();

  //* randomized login now message
  const loginNow = [
    {
      text: "Already a member?",
      linkText: "Log in Now!",
    },
    {
      text: "Returning user?",
      linkText: "Log in Now!",
    },
    {
      text: "Been here before?",
      linkText: "Log in Now!",
    },
    {
      text: "Account holder?",
      linkText: "Log in Now!",
    },
    {
      text: "Back for more?",
      linkText: "Sign in Now!",
    },
    {
      text: "Frequent visitor?",
      linkText: "Log in Now!",
    },
  ];
  const loginNowText = loginNow[generateRandomNoFromRange(0, loginNow.length)];

  return (
    <p className="text-center">
      {loginNowText?.text || loginNow[0].text} –{" "}
      <span onClick={() => navigate("/auth/login")} className="text-[#40A2E3] cursor-pointer underline">
        {loginNowText?.linkText || loginNow[0].linkText}
      </span>
    </p>
  );
};
export default AlreadyHaveAcc;
