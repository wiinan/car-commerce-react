import React from "react";
import Home from "./pages/homePage/index";
import Login from "./pages/LoginScreen";
import { Routes, Route } from "react-router-dom";

export default function DefaultRoutes() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/another" element={<>Helloo</>} />
      </Routes>
    </>
  );
}
