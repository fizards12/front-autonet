import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import MainPage from "./MainPage";
import Switch from "./Switch";

function Switches() {
  return (
    <Routes>
      <Route path="main" element={<MainPage />} />
      <Route path=":id" element={<Switch />} />
      <Route path="*" element={<Navigate to={"main"} />} />
    </Routes>
  );
}

export default Switches;
