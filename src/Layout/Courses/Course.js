import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import LeftCourse from "./LeftCourse/LeftCourse";
import RightCourse from "./RightCourse/RightCourse";
// import { Link } from "react-router-dom";

const Course = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/courses")
      .then((res) => res.json())
      .then((data) => setCategories(data));
  }, []);

  return (
    <div>
      <div className=" grid lg:grid-cols-12 md:grid-cols-12 gap-5">
        <div className="text-center px-2 rounded-br-md py-10 font-bold bg-gray-200 lg:col-span-2 md:col-span-3">
          <h1 className="bg-indigo-800 mb-8 rounded-md p-3 text-lg text-white">
            Course List
          </h1>
          <div className="grid lg:grid-cols-1 md:grid-cols-1">
            {categories.map((category) => (
              <LeftCourse key={category.id} category={category}></LeftCourse>
            ))}
          </div>
        </div>
        <div className="m-12 lg:col-span-10 md:col-span-9">
          <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 grid-cols-1 gap-5">
            {categories.map((category) => (
              <RightCourse key={category.id} category={category}></RightCourse>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Course;
