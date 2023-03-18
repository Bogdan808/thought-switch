import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "../App";
import { Main } from "./Main";
import { LogIn } from "./Login";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Main />,
      },
      {
        path: "/about",
        element: <h1>about</h1>,
      },
      {
        path: "/login",
        element: <LogIn />,
      },
    ],
  },
]);

export const Router = () => {
  return <RouterProvider router={router} />;
};
