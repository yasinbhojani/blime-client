import { useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";

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
			<Outlet />
		</section>
	);
};
export default Root;
