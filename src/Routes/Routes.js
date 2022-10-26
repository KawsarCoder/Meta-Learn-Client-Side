import { createBrowserRouter } from "react-router-dom";
import Course from "../Layout/Courses/Course";
import CourseDetails from "../Layout/Courses/CourseDetails/CourseDetails";
// import Header from "../Layout/Header/Header";
import Home from "../Layout/Home/Home";
import Main from "../Layout/Main/Main";
import Login from "../Login/Login";

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
          return fetch(`http://localhost:5000/courses/${params.id}`);
        },
        element: <CourseDetails></CourseDetails>,
      },
      {
        path: "/login",
        element:<Login></Login>
      }
    ],
  },
  {
    path: "*",
    element: <p>Path will not define</p>,
  },
]);
