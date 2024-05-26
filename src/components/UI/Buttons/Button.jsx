import styles from "./Button.module.css";

const Button = ({
  icon,
  children,
  onClick,
  className,
  variant,
  reverse = false,
  type = "button",
  isLoading = false,
}) => {
  //* default button
  let defaultClassNames = `border border-[#10bb8d] rounded-[5px] bg-primary px-5 py-[0.5rem] text-[0.9rem] hover:bg-[#0a8156] transition text-white inline ${className} ${
    icon && "flex items-center gap-2"
  }`;

  //* dark button
  if (variant === "dark") {
    defaultClassNames = `border border-gray-500 rounded-[5px] bg-[#1a1919] px-5 py-[0.5rem] text-[0.9rem] hover:bg-[#0e0e0e] transition text-white inline ${className} ${
      icon && "flex items-center gap-2"
    }`;
  }

  return (
    <button onClick={onClick} type={type} className={defaultClassNames}>
      {isLoading ? (
        <div className="flex justify-center items-center gap-3">
          <div className={styles.loader}></div>
          <div>Loading...</div>
        </div>
      ) : (
        <>
          {icon && !reverse && <img src={icon} alt="" width={14} />}
          {children}
          {icon && reverse && <img src={icon} alt="" width={14} />}
        </>
      )}
    </button>
  );
};
export default Button;
