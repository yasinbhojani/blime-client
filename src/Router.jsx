import { createBrowserRouter, RouterProvider } from "react-router-dom";

import NotFound from "./components/404 Not Found/NotFound";
import Root from "./Pages/Root";
import Home from "./Pages/Home";

const Router = () => {
  const router = createBrowserRouter([
    {
      path: "",
      element: <Root />,
      errorElement: <NotFound />,
      children: [
        { index: true, element: <Home /> },
        { path: "/about", element: <p>About</p> },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
};

export default Router;
