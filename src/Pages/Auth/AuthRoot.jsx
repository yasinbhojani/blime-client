import { useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";

const AuthRoot = () => {
	const navigate = useNavigate();

	//* verifying if user is logged-in or not
	useEffect(() => {
		const token = localStorage.getItem("token");

		if (token) {
			navigate("/");
		}
	}, [navigate]);

	return (
		<section>
			<Outlet />
		</section>
	);
};
export default AuthRoot;
