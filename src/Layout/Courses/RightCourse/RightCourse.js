import React from "react";

const RightCourse = ({ category }) => {
  const { id, name, description, img } = category;
  return (
    <div className="border-blue-500 border-4 rounded-lg  p-5">
      <img className="h-3/5 mb-3" src={img} alt="" />
      <h3 className="font-bold text-xl mb-3">{name}</h3>
      <p className="text-gray-500">
        {description.length < 50
          ? description
          : description.slice(0, 50) + "..."}
      </p>
    </div>
  );
};

export default RightCourse;
