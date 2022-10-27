import React from "react";
import "react-phone-number-input/style.css";
import PhoneInput from "react-phone-number-input";
import { useState } from "react";
import { Button, Form } from "react-daisyui";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";
// import { async } from "@firebase/util";
const PhoneLogin = () => {
  const [error, setError] = useState("");
  const [otp, setOtp] = useState("");
  const [flag, setFlag] = useState(false);
  const [confirmObj, setConfirmObj] = useState("");
  const [number, setNumber] = useState("");
  const { setCapcha } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  const getOtp = async (e) => {
    e.preventDefault();
    setError("");
    if (number === "" || number === undefined)
      return setError("Enter valid number");
    try {
      const response = await setCapcha(number);
      console.log(response);
      setConfirmObj(response);
      setFlag(true);
    } catch (err) {
      setError(err.message);
    }
    console.log(number);
  };
  const verifyOtp = async (e) => {
    e.preventDefault();
    console.log(otp);
    if (otp === "" || otp === null) return;
    try {
      setError("");
      await confirmObj.confirm(otp);

      navigate(from, { replace: true });
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div className="p-4 box">
      <h2 className="mb-3 text-center">Firebase Phone Auth</h2>
      {/* {error && <Alert variant="danger"></Alert>} */}
      <Form
        className="grid grid-cols-12"
        onSubmit={getOtp}
        style={{ display: !flag ? "blog" : "none" }}
      >
        <div className=" lg:col-start-4 lg:col-end-9 col-start-1 col-end-13">
          <PhoneInput
            defaultCountry="BD"
            value={number}
            onChange={setNumber}
            placeholder="Enter phone number"
          />
          <div id="recatcha-container"></div>
          <span>{error}</span>
          <div className="button-right">
            <Link to="/login">
              <Button className="bg-orange-500  p-3 m-5 rounded text-white">
                {" "}
                Cancel
              </Button>
            </Link>
            <Button
              className="bg-green-500  p-3 m-5 rounded text-white"
              type="submit"
            >
              {" "}
              send otp
            </Button>
          </div>
        </div>
      </Form>
      <Form className="grid grid-cols-12" onSubmit={verifyOtp}>
        <div className=" lg:col-start-4 lg:col-end-9 col-start-1 col-end-13">
          <div className="m-3">
            <input
              type="text"
              placeholder="enter otp"
              onChange={(e) => setOtp(e.target.value)}
            ></input>
            <label
              htmlFor="number"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
            >
              Enter your OTP
            </label>
          </div>

          <span>{error}</span>
          <div className="button-right">
            <Link to="/login">
              <Button className="bg-orange-500 p-3 m-5 rounded text-white">
                {" "}
                cencel
              </Button>
            </Link>
            <Button
              className="bg-green-500 p-3 m-5 rounded text-white"
              type="submit"
            >
              {" "}
              Confirm otp
            </Button>
          </div>
        </div>
      </Form>
    </div>
  );
};

export default PhoneLogin;
