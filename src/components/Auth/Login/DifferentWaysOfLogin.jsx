import google from "../../../assets/icons/Google.svg";
import github from "../../../assets/icons/Github.svg";
import { generateRandomNoFromRange } from "../../../utils/utils";
import { useNavigate } from "react-router-dom";

const DifferentWaysOfLogin = () => {
	const navigate = useNavigate();

	//* defining buttons data
	const loginMethods = [
		{
			icon: google,
			label: "google",
			onClick: () => console.log("google"),
		},
		{
			icon: github,
			label: "github",
			onClick: () => console.log("github"),
		},
	];

	//* randomized register now message
	const registerNow = [
		{
			text: "Join us today",
			linkText: "Register Now!",
		},
		{
			text: "Start now",
			linkText: "Join us!",
		},
		{
			text: "Get started",
			linkText: "Sign up!",
		},
		{
			text: "Join us today",
			linkText: "Register!",
		},
		{
			text: "Start exploring",
			linkText: "Create account!",
		},
		{
			text: "Sign up",
			linkText: "Dive in!",
		},
		{
			text: "Register",
			linkText: "Begin!",
		},
		{
			text: "Join now",
			linkText: "Get going!",
		},
		{
			text: "Start today",
			linkText: "Sign up!",
		},
		{
			text: "Get started",
			linkText: "Join us!",
		},
		{
			text: "Create account",
			linkText: "Begin!",
		},
	];
	const registerNowText =
		registerNow[generateRandomNoFromRange(0, registerNow.length)];

	//* define styles form lines
	const lineStyle = "w-1/6 h-[1px] bg-gray-500 mt-1";

	return (
		<>
			<div className="flex justify-center items-center gap-3 w-1/2 m-auto">
				<div className={lineStyle}></div>

				{loginMethods.map((method, index) => (
					<button
						className="border border-gray-500 bg-white text-[0.9rem] focus:outline-none focus:border-gray-400 rounded-full"
						key={index}
						onClick={method.onClick}
					>
						<img
							className="w-9 h-9"
							src={method.icon}
							loading="lazy"
							alt={method.label}
						/>
					</button>
				))}

				<div className={lineStyle}></div>
			</div>

			<p className="text-center mt-5">
				{registerNowText?.text || registerNow[0].text} –{" "}
				<span
					onClick={() => navigate("/auth/signup")}
					className="text-[#40A2E3] cursor-pointer underline"
				>
					{registerNowText?.linkText || registerNow[0].linkText}
				</span>
			</p>
		</>
	);
};
export default DifferentWaysOfLogin;
