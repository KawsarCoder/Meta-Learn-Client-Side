import React from "react";

const LeftCourse = ({ category }) => {
  return (
    <div>
      <h4 className="py-2 rounded hover:text-white hover:bg-blue-600">
        {" "}
        {category.name}
      </h4>
    </div>
  );
};

export default LeftCourse;
