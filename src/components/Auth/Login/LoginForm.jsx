import { useState } from "react";

//*components imports
import Input from "../../UI/Inputs/Input";
import Button from "../../UI/Buttons/Button";
import Logo from "../../UI/Logo";

const LoginForm = () => {
	//* States declaration
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

	//** state updating functions
	const emailInputChangeHandler = (e) => {
		setEmail(e.target.value);
	};
	const passwordInputChangeHandler = (e) => {
		setPassword(e.target.value);
	};

	//*form submission function
	const loginFormSubmitHandler = (e) => {
		e.preventDefault();
		//* some api request here
	};

	return (
		<>
			<Logo />
			<form className="w-80 m-auto" onSubmit={(e) => loginFormSubmitHandler(e)}>
				<Input
					label="Email"
					placeholder="example@gmail.com"
					onChange={(e) => emailInputChangeHandler(e)}
					value={email}
					type={"email"}
					required
				/>
				<Input
					label="Password"
					variant="password"
					onChange={(e) => passwordInputChangeHandler(e)}
					value={password}
					divClass={"mt-3"}
					secondaryText="Forgot password?"
					secondaryTextOnClick={() => console.log("Forgot password?")}
					required
				/>

				<Button className={"my-5 w-full"} type="submit">
					Login
				</Button>
			</form>
		</>
	);
};
export default LoginForm;
