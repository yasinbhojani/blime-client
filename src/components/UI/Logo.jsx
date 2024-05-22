import logo from "../../assets/BlimeLogo.svg";

const Logo = ({ className }) => {
  return (
    <>
      <div className={`flex justify-center items-center gap-3 ${className}`}>
        <img src={logo} alt="" width={25} />
        <h1 className="text-3xl font-semibold text-primary">BLIME</h1>
      </div>
    </>
  );
};
export default Logo;
