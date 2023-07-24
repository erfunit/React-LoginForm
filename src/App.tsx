import React, { FC } from "react";
import { Route, Routes } from "react-router-dom";

import Login from "./components/Login";
import SignUp from "./components/SignUp";

const App: FC = () => {
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
