import React from "react";
import Home from "./pages/homePage/index";
import Login from "./pages/loginPage/LoginScreen";
import Register from "./pages/registerPage/registerScreen";
import { Routes, Route } from "react-router-dom";
import { StoreProvider } from "./store/context";

export default function DefaultRoutes() {
  return (
    <>
      <StoreProvider>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/another" element={<>Helloo</>} />
        </Routes>
      </StoreProvider>
    </>
  );
}
