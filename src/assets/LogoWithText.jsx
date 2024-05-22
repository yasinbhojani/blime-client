import logo from "./BlimeLogo.svg";
const LogoWithText = () => (
  <div className="flex justify-center items-center gap-3">
    <img src={logo} alt="" width={25} />
    <h1 className="text-3xl font-semibold text-primary">BLIME</h1>
  </div>
);
export default LogoWithText;
