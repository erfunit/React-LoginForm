import React, { useState, useEffect } from "react";
import validate from "./validate";
import { useForm } from "@formspree/react";
import { notify } from "./toas";
import { motion as m } from "framer-motion";
import { Link } from "react-router-dom";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Login = () => {
  const [formData, handleSubmit] = useForm("mbjeeydl");
  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({});
  const [data, setData] = useState({
    email: "",
    password: "",
  });

  const changeHandler = (event) => {
    if (event.target.name === "accept")
      setData({ ...data, isAccepted: event.target.checked });
    else setData({ ...data, [event.target.name]: event.target.value });
  };

  const touchHandler = (event) => {
    setTouched({ ...touched, [event.target.name]: true });
  };

  useEffect(() => {
    setErrors(validate(data, "login"));
    // console.log(errors);
  }, [data]);

  const onSubmitHandler = (event) => {
    event.preventDefault();

    setTouched({
      email: true,
      password: true,
    });

    if (Object.values(errors).length) {
      Object.values(errors).forEach((error) => {
        notify(error);
      });
    } else {
      notify("Yes! Welcome to your account:)", "success");
    }
  };

  return (
    <m.div
      initial={{ left: -6, opacity: 0 }}
      animate={{ left: 0, opacity: 1 }}
      className="bg-white relative p-4 rounded-md shadow-xl w-full max-w-[350px]"
    >
      <ToastContainer />
      <form onSubmit={onSubmitHandler} className="flex flex-col gap-2">
        <h1 className="font-bold mb-4 text-gray-700 text-3xl">Login</h1>
        <div className="flex flex-col justify-center items-start">
          <label className="text-gray-600 block text-lg w-[80px] font-normal">
            email:
          </label>
          <input
            placeholder="enter your email..."
            onFocus={(event) => touchHandler(event)}
            className="outline-none bg-slate-200 text-black w-full transition-all text-lg p-1 px-3 focus:text-black/100 rounded focus:bg-slate-100 "
            type="text"
            name="email"
            id="email"
            value={data.email}
            onChange={(event) => changeHandler(event)}
          />
          {errors.email && touched.email && (
            <m.span
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              className="text-red-700 bg-red-200 p-[2px] rounded mt-1 text-sm font-light"
            >
              {errors.email}
            </m.span>
          )}
        </div>
        <div className="flex flex-col justify-center items-start">
          <label className="text-gray-600 block text-lg w-[80px] font-normal">
            password:
          </label>
          <input
            placeholder="enter your password..."
            onFocus={(event) => touchHandler(event)}
            className="outline-none bg-slate-200 text-black w-full transition-all text-lg p-1 px-3 focus:text-black/100 rounded focus:bg-slate-100 "
            type="text"
            name="password"
            id="password"
            onChange={(event) => changeHandler(event)}
            value={data.password}
          />
          {errors.password && touched.password && (
            <m.span
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              className="text-red-700 bg-red-200 p-[2px] rounded mt-1 text-sm font-light"
            >
              {errors.password}
            </m.span>
          )}
        </div>
        <div className="flex justify-between px-6 mt-4">
          <Link
            to="/SignUp"
            className="text-sky-500 font-semibold text-lg cursor-pointer hover:text-sky-700 transition-all"
          >
            Sign up
          </Link>
          <button
            type="submit"
            className="bg-sky-500 text-white py-2 px-4 rounded-md hover:bg-sky-600 transition-all"
          >
            Login
          </button>
        </div>
      </form>
    </m.div>
  );
};

export default Login;
