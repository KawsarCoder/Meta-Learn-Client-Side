import { createBrowserRouter } from "react-router-dom";
import Header from "../Layout/Header/Header";
// import Main from "../Layout/Main/Main";

export const routes = createBrowserRouter([
  {
    path: "/",
    element: <Header></Header>,
    children: [
      {
        path: "/home",
        element: <Header></Header>,
      },
    ],
  },
]);
