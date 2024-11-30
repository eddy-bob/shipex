import React from "react";
import { Routes, Route } from "react-router-dom";
import Login from "./auth/Login";
import ViewShipment from "./shipment/ViewShipment";
import "./App.css";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/auth/login" element={<Login />} />
        <Route path="/shipment" element={<ViewShipment />} />
      </Routes>
    </>
  );
}

export default App;
