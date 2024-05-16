import { useState } from "react";
import Button from "../../components/UI/Buttons/Button";
import Input from "../../components/UI/Inputs/Input";
import Modal from "../../components/UI/Modal/Modal";
import logo from "../../assets/BlimeLogo.svg";
import { useNavigate } from "react-router-dom";
import { decodeJWT } from "../../utils/utils";

const Home = () => {
	const [modal, setModal] = useState(false);
	const redirect = useNavigate();
	const decodedPayload = decodeJWT();
	const handelLogout = () => {
		localStorage.removeItem("token");
		redirect("/auth/login");
	};
	return (
		<>
			{decodedPayload && (
				<p>welcome, {decodedPayload.first_name} happy to see you!</p>
			)}
			<div className="flex justify-center items-center gap-3">
				<img src={logo} alt="" width={25} />
				<h1 className="text-3xl font-semibold text-[#0B8E5D]">BLIME</h1>
			</div>
			<div className="w-80 m-auto">
				<Input
					label="Email"
					placeholder="example@gmail.com"
					reverseText={"invalid email"}
				/>
				<Input
					label="Password"
					type="password"
					divClass={"mt-3"}
					secondaryText="Forgot password?"
					secondaryTextOnClick={() => console.log("lol")}
				/>

				<Button
					className={"mt-5 w-full"}
					variant={"dark"}
					onClick={() => setModal(true)}
				>
					Subscribe Now!
				</Button>
			</div>
			<Modal isVisible={modal} onClose={() => setModal(false)}>
				<h1 className="text-lg font-bold mb-4">Custom Modal Content</h1>
				<p>This is a custom modal built with React and Tailwind CSS.</p>
				<Button className={"mt-5 text-[1rem]"} onClick={handelLogout}>
					logout
				</Button>
			</Modal>
		</>
	);
};
export default Home;
