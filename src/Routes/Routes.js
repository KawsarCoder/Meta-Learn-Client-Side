import { createBrowserRouter } from "react-router-dom";
import Course from "../Layout/Courses/Course";
// import Header from "../Layout/Header/Header";
import Home from "../Layout/Home/Home";
import Main from "../Layout/Main/Main";

export const routes = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/home",
        element: <Home></Home>,
      },
      {
        path: "/course",
        element: <Course></Course>,
      },
    ],
    },
    {
        path: "*",
        element:<p>Path will not define</p>
    }
]);
