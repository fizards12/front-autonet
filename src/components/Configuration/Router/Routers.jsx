import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Router from "./Router";
import MainPage from "./MainPage";

function Routers() {
  const namesAndRoutesOfRouterDevices = {
    names: [
      "Main Router",
      "Electrical Building",
      "Mechanical Building",
      "Administrator Building",
      "Preparatory Building",
    ],
    devicesRoutes: [
      "main-router",
      "electrical",
      "mechanical",
      "adminstrator",
      "preparatory",
    ],
  };
  return (
    <Routes>
      <Route path="main" element={<MainPage />} />
      {namesAndRoutesOfRouterDevices.names.map((name , index)=>{
        return <Route key={name} path={`${namesAndRoutesOfRouterDevices.devicesRoutes[index]}/*`} element={<Router name={name} />} />
      })}
      <Route path="*" element={<Navigate to={"main"} replace/>} />
    </Routes>
  );
}

export default Routers;
