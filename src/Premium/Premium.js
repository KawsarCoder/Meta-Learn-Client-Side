import React from "react";
import { useLoaderData } from "react-router-dom";

const Premium = () => {
  const courseDetails = useLoaderData();
  const { name } = courseDetails;
  return (
    <div>
      <h1>name: {name}</h1>
    </div>
  );
};

export default Premium;
