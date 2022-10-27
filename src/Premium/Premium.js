import React from "react";
import { useLoaderData } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const Premium = () => {
  const courseDetails = useLoaderData();
  const { name, price } = courseDetails;
  const notify = () => toast("Thanks for buying!");
  return (
    <div className="grid grid-cols-12">
      <div className="border-blue-500 lg:col-start-5 lg:col-end-9 col-start-2 col-end-12 mt-10  bg-gray-200 border-4 rounded-lg  p-5">
        <h3 className="font-bold text-xl mb-3">{name} course</h3>
        <h3 className="font-bold text-rose-500 mb-3">Price: {price}</h3>

        <button
          onClick={notify}
          className="bg-blue-700 hover:bg-blue-500 mt-5 p-3 rounded-lg text-white font-bold"
        >
          Check Out
        </button>
        <ToastContainer />
      </div>
    </div>
  );
};

export default Premium;
