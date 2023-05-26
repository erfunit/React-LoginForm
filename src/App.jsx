import React from "react";
import SignUp from "./components/SignUP";
import { Routes, Route } from "react-router-dom";
import Login from "./components/Login";

const App = () => {
  return (
    <div className="h-screen w-screen bg-slate-100 flex justify-center items-center px-5">
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/SignUp" element={<SignUp />} />
      </Routes>
    </div>
  );
};

export default App;
