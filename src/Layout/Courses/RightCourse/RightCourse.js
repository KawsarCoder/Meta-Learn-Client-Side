import React from "react";
import { Link } from "react-router-dom";

const RightCourse = ({ category }) => {
  const { name, description, img, id } = category;

  return (
    <div className="border-blue-500 bg-gray-200 border-4 rounded-lg  p-5">
      <div>
        <img className="h-3/6 mb-3" src={img} alt="" />
      </div>
      <h3 className="font-bold text-xl mb-3">{name}</h3>
      <p className="text-gray-500">
        {description.length < 50
          ? description
          : description.slice(0, 50) + "..."}
      </p>

      <Link to={`/courses/${id}`}>
        <button className="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 shadow-lg  shadow-blue-500/50 dark:shadow-lg font-bold  px-3 py-2 rounded-md mt-5 dark:shadow-blue-800/80">
          View Details
        </button>
      </Link>
    </div>
  );
};

export default RightCourse;
