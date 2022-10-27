import React from "react";
import { useLoaderData } from "react-router-dom";
import Pdf from "react-to-pdf";
import { Link } from "react-router-dom";

const ref = React.createRef();

const CourseDetails = () => {
  const courseDetails = useLoaderData();

  const { name, img, id, description, duration, price } = courseDetails;
  return (
    <div className="grid grid-cols-12 content-center my-10">
      <div className="lg:col-start-5 lg:col-end-9 col-start-1 col-end-13">
        <div ref={ref}>
          <div className="grid grid-cols-12 mb-10">
            <h1 className="col-start-4 col-end-10 text-center p-2 mb-5 text-blue-500 font-bold border-b-4 border-b-rose-500 text-2xl">
              Course Details
            </h1>
          </div>
          <div className="">
            <img
              className="h-76 w-full rounded-tl-md rounded-tr-md"
              src={img}
              alt=""
            />
          </div>
          <div className="border-x-gray-300 bg-gray-200 p-10 border">
            <h3 className="font-bold text-2xl mb-3">{name}</h3>
            <p className="text-gray-500">{description}</p>
            <h4 className="font-bold my-2">Duration: {duration}</h4>
            <h3 className="text-xl font-bold text-rose-500">Price: {price}</h3>
          </div>
        </div>
        <div className="lg:flex md:flex text-center justify-between bg-gray-200 px-10 pb-10 border border-x-gray-300 border-b-gray-300 rounded-bl-md rounded-br-md">
          <Link to={`/courses/${id}/premium`}>
            <button className="lg:mr-5 md:mr-5 sm:mb-5 mb-5 lg:mb-0 md:mb-0 bg-blue-700 hover:bg-blue-600 rounded-lg font-bold py-4 px-10 text-white">
              Get Premium
            </button>
          </Link>
          <Pdf targetRef={ref} filename="code-example.pdf">
            {({ toPdf }) => (
              <button
                onClick={toPdf}
                className="mr-5 bg-blue-700 hover:bg-blue-600 rounded-lg font-bold py-4 px-10 text-white"
              >
                Download
              </button>
            )}
          </Pdf>
        </div>
      </div>
    </div>
  );
};

export default CourseDetails;
