import { Lock, Unlock } from "lucide-react";
import { useState } from "react";

const Input = ({
	label,
	type = "text",
	placeholder = "Enter Text",
	error,
	onChange,
	value,
	secondaryText,
	secondaryTextOnClick,
	divClass,
	labelClass,
	inputClass,
	required,
	variant,
}) => {
	const [showPassword, setShowPassword] = useState(false);

	//* default input
	if (!variant) {
		return (
			<div className={`flex flex-col ${divClass}`}>
				<label className={`text-left text-[1rem] mb-2 ${labelClass}`}>
					{label}
				</label>
				<input
					type={type}
					placeholder={placeholder}
					className={`border border-gray-500 rounded-[5px] bg-[#1a1919] px-5 py-[0.5rem] text-[0.9rem] focus:outline-none focus:border-gray-400  ${inputClass}`}
					onChange={onChange}
					value={value}
					required={required}
				/>
				{error && (
					<p className="text-left text-[1rem] mt-2 text-red-600">{error}</p>
				)}
			</div>
		);
	}

	//* password input
	if ((variant = "password")) {
		return (
			<div className={`flex flex-col ${divClass}`}>
				<div className="flex justify-between items-center mb-2">
					<label className={`text-left text-[1rem] ${labelClass}`}>
						{label}
					</label>
					<span
						className="text-left text-[0.8rem] opacity-50 cursor-pointer"
						onClick={secondaryTextOnClick}
					>
						{secondaryText}
					</span>
				</div>
				<div
					className={`border border-gray-500 rounded-[5px] bg-[#1a1919] px-5 py-[0.5rem] text-[0.9rem] focus:outline-none focus:border-gray-400 flex justify-between items-center ${inputClass}`}
				>
					<input
						type={showPassword ? "text" : "password"}
						placeholder={showPassword ? "Enter password" : "•••••••••"}
						className="outline-none border-none bg-transparent w-[80%]"
						onChange={onChange}
						value={value}
						required={required}
					/>
					<div
						className="cursor-pointer"
						onClick={() => setShowPassword(!showPassword)}
					>
						{showPassword ? (
							<Unlock className="w-4" />
						) : (
							<Lock className="w-4" />
						)}
					</div>
				</div>
				{error && (
					<p className="text-left text-[1rem] mt-2 text-red-600">{error}</p>
				)}
			</div>
		);
	}
};
export default Input;
