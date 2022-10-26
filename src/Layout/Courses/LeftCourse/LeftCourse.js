import React from "react";
import { Link } from "react-router-dom";

const LeftCourse = ({ category }) => {
  return (
    <div>
      <Link to={`/courses/${category.id}`}>
        <h4 className="py-2 rounded hover:text-white hover:bg-blue-600">
          {" "}
          {category.name}
        </h4>
      </Link>
    </div>
  );
};

export default LeftCourse;
