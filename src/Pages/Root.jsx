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

    //* write logic to verify token
  }, []);

  return (
    <section>
      <Navbar />
      <Outlet />
    </section>
  );
};
export default Root;
