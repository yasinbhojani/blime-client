import { useState } from "react";

import Input from "../../UI/Inputs/Input";
import Button from "../../UI/Buttons/Button";
import Logo from "../../UI/Logo";
import { handelLogin } from "../../../http/post/auth/authAPIs";
import { useNavigate } from "react-router-dom";

const LoginForm = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const emailInputChangeHandler = (e) => {
    setEmail(e.target.value);
  };
  const passwordInputChangeHandler = (e) => {
    setPassword(e.target.value);
  };

  const loginFormSubmitHandler = async (e) => {
    e.preventDefault();
    const token = await handelLogin({ email, password });
    if (token) navigate("/");
    else alert("Something went wrong");
  };

  return (
    <>
      <Logo className="mt-4" />
      <form className="w-80 m-auto" onSubmit={(e) => loginFormSubmitHandler(e)}>
        <Input
          label="Email"
          placeholder="example@gmail.com"
          onChange={(e) => emailInputChangeHandler(e)}
          value={email}
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
