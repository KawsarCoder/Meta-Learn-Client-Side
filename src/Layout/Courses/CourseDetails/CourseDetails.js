import React from "react";
import { useLoaderData } from "react-router-dom";
import Pdf from "react-to-pdf";

const ref = React.createRef();

const CourseDetails = () => {
  const courseDetails = useLoaderData();

  console.log(courseDetails);
  const { name, img, description, duration, price } = courseDetails;
  return (
    <div className="grid grid-cols-12 content-center my-16">
      <div className="col-start-4 col-end-9">
        <div className="grid grid-cols-12 mb-10">
          <h1 className="col-start-5 col-end-9 text-center p-2 mb-5 text-blue-500 font-bold border-b-4 border-b-rose-500 text-2xl">
            Course Details
          </h1>
        </div>
        <div>
          <img className="h-3/6 rounded-tl-md rounded-tr-md" src={img} alt="" />
        </div>
        <div className="border-x-gray-300 border-b-gray-300 rounded-bl-md rounded-br-md bg-gray-200 p-10 border">
          <div ref={ref}>
            <h3 className="font-bold text-2xl mb-3">{name}</h3>
            <p className="text-gray-500">{description}</p>
            <h4 className="font-bold my-2">Duration: {duration}</h4>
            <h3 className="text-xl font-bold text-rose-500">Price: {price}</h3>
          </div>
          <div className="flex justify-between mt-5">
            <button className="mr-5 bg-blue-700 hover:bg-blue-600 rounded-lg font-bold py-4 px-10 text-white">
              Buy now
            </button>
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
    </div>
  );
};

export default CourseDetails;
