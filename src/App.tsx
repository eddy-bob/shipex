import React, { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import Login from "./auth/Login";
import ViewShipment from "./shipment/ViewShipment";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./App.css";

function App() {
  const [domLoaded, setDomLoaded] = useState(false);
  
useEffect(() => {
  setDomLoaded(true);
}, []);
  
  return (
    <>
      {domLoaded && <ToastContainer />}

      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/auth/login" element={<Login />} />
        <Route path="/shipment" element={<ViewShipment />} />
      </Routes>
    </>
  );
}

export default App;
