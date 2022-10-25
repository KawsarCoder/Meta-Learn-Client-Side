import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";

const Course = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/courses")
      .then((res) => res.json())
      .then((data) => setCategories(data));
  }, []);

  return (
    <div>
      <h1>this page for course</h1>
          <h4>All category: {categories.length}</h4>
          
      <div>
        {categories.map((category) => (
          <p key={category.id}>
            <Link>{category.name}</Link>
          </p>
        ))}
      </div>
    </div>
  );
};

export default Course;
