import { useState } from "react";
import Logo from "../../UI/Logo";
import Input from "../../UI/Inputs/Input";
import Button from "../../UI/Buttons/Button";

const SignupForm = () => {
	//* States declaration
	const [firstName, setFirstName] = useState("");
	const [lastName, setLatsName] = useState();
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [confirmPassword, setConfirmPassword] = useState("");

	//* state updating functions
	const firstNameInputChangeHandler = (e) => {
		setFirstName(e.target.value);
	};
	const lastNameInputChangeHandler = (e) => {
		setLatsName(e.target.value);
	};
	const emailInputChangeHandler = (e) => {
		setEmail(e.target.value);
	};
	const confirmPasswordInputChangeHandler = (e) => {
		setConfirmPassword(e.target.value);
	};

	//*form submission function
	const signupFormSubmitHandler = (e) => {
		e.preventDefault();
		//* some api request here
	};
	return (
		<>
			<Logo />
			<form
				className="w-80 m-auto"
				onSubmit={(e) => signupFormSubmitHandler(e)}
			>
				<Input
					label="First Name"
					placeholder="John"
					onChange={(e) => firstNameInputChangeHandler(e)}
					value={firstName}
					required
					divClass={"mt-3"}
				/>
				<Input
					label="Last Name"
					placeholder="Doe"
					onChange={(e) => lastNameInputChangeHandler(e)}
					value={lastName}
					required
					divClass={"mt-3"}
				/>
				<Input
					label="Email"
					placeholder="example@gmail.com"
					onChange={(e) => emailInputChangeHandler(e)}
					value={email}
					type={"email"}
					divClass={"mt-3"}
					required
				/>
				<Input
					label="Password"
					variant="password"
					onChange={(e) => setPassword(e.target.value)}
					value={password}
					divClass={"mt-3"}
					required
				/>
				<Input
					label="Confirm Password"
					variant="password"
					onChange={(e) => confirmPasswordInputChangeHandler(e)}
					value={confirmPassword}
					divClass={"mt-3"}
					error={password !== confirmPassword && "Password mismatched"}
					required
				/>
				<Button className={"my-5 w-full"} type="submit">
					Signup
				</Button>
			</form>
		</>
	);
};
export default SignupForm;
