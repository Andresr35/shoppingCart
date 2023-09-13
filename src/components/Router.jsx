import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import Shopping from "../pages/Shopping";

const Router = () => {
  const router = createBrowserRouter([
    { path: "/", element: <Home /> },
    { path: "/Shopping", element: <Shopping /> },
  ]);
  return <RouterProvider router={router} />;
};

export default Router;
