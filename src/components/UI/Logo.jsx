import logo from "../../assets/BlimeLogo.svg";

const Logo = () => {
	return (
		<>
			<div className="flex justify-center items-center gap-3">
				<img src={logo} alt="" width={25} />
				<h1 className="text-3xl font-semibold text-[#0B8E5D]">BLIME</h1>
			</div>
		</>
	);
};
export default Logo;
