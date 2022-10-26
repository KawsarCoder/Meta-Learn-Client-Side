import { createBrowserRouter } from "react-router-dom";
import Terms from "../Terms/Terms";
import Course from "../Layout/Courses/Course";
import CourseDetails from "../Layout/Courses/CourseDetails/CourseDetails";
// import Header from "../Layout/Header/Header";
import Home from "../Layout/Home/Home";
import Main from "../Layout/Main/Main";
import Login from "../Login/Login";
import Premium from "../Premium/Premium";
import Private from "../Private/Private";
import Register from "../Register/Register";

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
        path: "/courses",
        element: <Course></Course>,
      },
      {
        path: "/courses/:id",
        loader: async ({ params }) => {
          return fetch(`https://meta-data-rho.vercel.app/courses/${params.id}`);
        },
        element: <CourseDetails></CourseDetails>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/courses/:id/premium",
        loader: async ({ params }) => {
          return fetch(`https://meta-data-rho.vercel.app/courses/${params.id}`);
        },
        element: (
          <Private>
            <Premium></Premium>
          </Private>
        ),
      },
      {
        path: "terms-and-conditions",
        element: <Terms></Terms>,
      },
    ],
  },
  {
    path: "*",
    element: <p>Path will not define</p>,
  },
]);
