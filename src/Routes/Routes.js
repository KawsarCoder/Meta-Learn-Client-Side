import { createBrowserRouter } from "react-router-dom";
import Terms from "../Terms/Terms";
import Course from "../Layout/Courses/Course";
import CourseDetails from "../Layout/Courses/CourseDetails/CourseDetails";
import Home from "../Layout/Home/Home";
import Main from "../Layout/Main/Main";
import Login from "../Login/Login";
import Premium from "../Premium/Premium";
import Private from "../Private/Private";
import Register from "../Register/Register";
import PhoneLogin from "../Login/PhoneLogin/PhoneLogin";
import Blog from "../Blog/Blog";
import Faq from "../Faq/Faq";

export const routes = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/home",
        element: <Home></Home>,
      },
      {
        path: "/courses",
        element: <Course></Course>,
      },
      {
        path: "/blog",
        element: <Blog></Blog>,
      },
      {
        path: "/faq",
        element: <Faq></Faq>,
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
        path: "/login/phone",
        element: <PhoneLogin></PhoneLogin>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/courses/:id/check-out",
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
