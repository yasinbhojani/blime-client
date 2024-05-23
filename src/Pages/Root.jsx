import { useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar/Navbar";
import { decodeJWT } from "../utils/utils";

const Root = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token");

    if (!token) {
      navigate("/auth/login");
    }

    const tokenData = decodeJWT();

    if (!tokenData.user_details) {
      localStorage.removeItem("token");
      navigate("/auth/login");
    }
  }, []);

  return (
    <section>
      <Navbar />
      <Outlet />
    </section>
  );
};
export default Root;
