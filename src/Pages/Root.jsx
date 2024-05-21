import { useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import Example from "./Home/Nav";

const Root = () => {
	const navigate = useNavigate();

	useEffect(() => {
		const token = localStorage.getItem("token");

		if (!token) {
			navigate("/auth/login");
		}

		//* write logic to verify token
	}, [navigate]);

	return (
		<section>
			<Example />
			<Outlet />
		</section>
	);
};
export default Root;
