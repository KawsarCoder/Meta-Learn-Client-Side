import React from "react";
import { Link } from "react-router-dom";

const Terms = () => {
  return (
    <div>
      <h1>My terms</h1>
      <p className="font-bold">
        Go back to{" "}
        <Link className="text-rose-500" to={"/register"}>
          Register
        </Link>
      </p>
    </div>
  );
};

export default Terms;
