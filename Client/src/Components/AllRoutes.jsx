import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../Pages/Home";
import Register from "../Pages/Register";
import Login from "../Pages/Login";
import ForgotPassword from "../Pages/ForgotPassword";
import Cloths from "../Pages/Cloths";
import Toys from "../Pages/Toys";
import Electronics from "../Pages/Electronics";
import Grocery from "../Pages/Grocery";
import Stationary from "../Pages/Stationary";
const AllRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/resetpassword" element={<ForgotPassword />} />
        <Route path="/cloths" element={<Cloths />} />
        <Route path="/toys" element={<Toys />} />
        <Route path="/electronics" element={<Electronics />} />
        <Route path="/grocery" element={<Grocery />} />
        <Route path="/stationary" element={<Stationary />} />
      </Routes>
    </div>
  );
};

export default AllRoutes;
