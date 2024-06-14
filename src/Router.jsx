import { createBrowserRouter, RouterProvider } from "react-router-dom";

//* component imports
import Root from "./Pages/Root";
import Home from "./Pages/Home/Home";
import Login from "./Pages/Auth/Login/Login";
import Signup from "./Pages/Auth/Signup/Signup";
import AuthRoot from "./Pages/Auth/AuthRoot";
import NotFound from "./components/notFound/NotFound";

const Router = () => {
  const router = createBrowserRouter([
    //* auth routes
    {
      path: "/auth",
      element: <AuthRoot />,
      errorElement: <NotFound />,
      children: [
        { path: "login", element: <Login /> },
        { path: "signup", element: <Signup /> },
      ],
    },
    //* default routes
    {
      path: "/",
      element: <Root />,
      errorElement: <NotFound />,
      children: [{ index: true, element: <Home /> }],
    },
  ]);

  return <RouterProvider router={router} />;
};

export default Router;
