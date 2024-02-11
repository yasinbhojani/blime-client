const Button = ({
	icon,
	children,
	onClick,
	className,
	variant,
	reverse = false,
	type = "button",
}) => {
	if (variant === "dark") {
		//* dark button
		return (
			<button
				onClick={onClick}
				type={type}
				className={`border border-gray-500 rounded-[5px] bg-[#1a1919] px-5 py-[0.5rem] text-[0.9rem] hover:bg-[#0e0e0e] transition text-white inline ${className} ${
					icon && "flex items-center gap-2"
				}`}
			>
				{icon && !reverse && <img src={icon} alt="" width={14} />}
				{children}
				{icon && reverse && <img src={icon} alt="" width={14} />}
			</button>
		);
	} else {
		//* default button
		return (
			<button
				onClick={onClick}
				type={type}
				className={`border border-[#10bb8d] rounded-[5px] bg-[#0B8E5D] px-5 py-[0.5rem] text-[0.9rem] hover:bg-[#0a8156] transition text-white inline ${className} ${
					icon && "flex items-center gap-2"
				}`}
			>
				{icon && !reverse && <img src={icon} alt="" width={14} />}
				{children}
				{icon && reverse && <img src={icon} alt="" width={14} />}
			</button>
		);
	}
};
export default Button;
