import React from "react";
import { Link } from "react-router-dom";

const RightCourse = ({ category }) => {
  const { name, description, img, id } = category;

  return (
    <div className="border-blue-500 bg-gray-200 border-4 rounded-lg  p-5">
      <img className="h-3/6 mb-3" src={img} alt="" />
      <h3 className="font-bold text-xl mb-3">{name}</h3>
      <p className="text-gray-500">
        {description.length < 50
          ? description
          : description.slice(0, 50) + "..."}
      </p>

      <Link to={`/courses/${id}`}>
        <button className="bg-blue-700 hover:bg-blue-500 mt-5 p-3 rounded-lg text-white font-bold">
          View Details
        </button>
      </Link>
    </div>
  );
};

export default RightCourse;
