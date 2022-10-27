import React from "react";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import { useState } from "react";
import "./Header.css";

const Header = () => {
  const { user, userLogOut } = useContext(AuthContext);
  const [mood, setMood] = useState(false);

  const toggleBtn = (event) => {
    const toggle = event.target.checked;
    if (toggle === true) {
      setMood(true);
    } else {
      setMood(false);
    }
  };
  console.log(user);
  const logOut = () => {
    userLogOut()
      .then(() => {})
      .catch((error) => console.error(error));
  };

  return (
    <div className="">
      <nav className="bg-indigo-800 lg:py-3 md:pt-3 sm:pt-3 py-10 border-gray-200 px-2 sm:px-4 dark:bg-gray-900">
        <div className="container text-center justify-items-center grid lg:grid-cols-3  mx-auto">
          <div>
            <a href="/" className="flex items-center md:my-5">
              <img
                src="https://1000logos.net/wp-content/uploads/2021/10/logo-Meta.png"
                className="mr-3 h-6 sm:h-9 w-12"
                alt="Flowbite Logo"
              />
              <span className="self-center text-xl font-semibold whitespace-nowrap text-white">
                <span className="bg-rose-500 text-white rounded p-3">
                  Meta Learn
                </span>
              </span>
            </a>
          </div>
          <div className="lg:flex md:flex sm:flex block md:order-2 mt-5">
            <label
              htmlFor="default-toggle"
              onClick={toggleBtn}
              className="inline-flex relative items-center cursor-pointer"
            >
              <input
                type="checkbox"
                value=""
                id="default-toggle"
                className="sr-only peer"
              />
              <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 mb-5 after:mt-1.5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
              <span className="mx-3 mb-4  text-sm font-medium text-white dark:text-gray-300">
                {mood ? (
                  <h1 className="bg-gray-500 rounded p-2">dark</h1>
                ) : (
                  <h1 className="bg-white text-black rounded p-2">light</h1>
                )}
              </span>
            </label>

            <div className="lg:mt-0 mt-5 ">
              {user?.uid ? (
                <div>
                  <div className="flex">
                    <div className="tooltip">
                      <img
                        className="h-10 rounded-full mx-3"
                        src={user?.photoURL}
                        alt="Pic"
                      />
                      <span className="tooltiptext"> {user?.displayName}</span>
                    </div>
                    <button
                      onClick={logOut}
                      className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                    >
                      log out
                    </button>
                  </div>
                </div>
              ) : (
                <>
                  <Link to={"/login"}>
                    <button
                      type="button"
                      className="text-white bg-blue-600 hover:bg-blue-500 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-3 md:mr-0 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                    >
                      Log In
                    </button>
                  </Link>
                </>
              )}
            </div>
          </div>
          <div className=" detailsBtn justify-between items-center w-full md:flex md:w-auto md:order-1">
            <ul className="flex flex-col p-4 mt-4 rounded-lg border md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
              <li>
                <Link
                  to="/home"
                  className="block py-2 pr-4 pl-3 rounded md:bg-transparent  hover:text-blue-600 md:p-0 dark:text-white"
                  aria-current="page"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/courses"
                  className="block py-2 pr-4 pl-3 rounded hover:bg-blue-500 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-white dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                >
                  Courses
                </Link>
              </li>
              <li>
                <Link
                  to="/faq"
                  className="block py-2 pr-4 pl-3 rounded hover:bg-blue-500 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-white dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                >
                  FAQ
                </Link>
              </li>
              <li>
                <Link
                  to="/blog"
                  className="block py-2 pr-4 pl-3 rounded hover:bg-blue-500 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-white dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                >
                  Blog
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;
