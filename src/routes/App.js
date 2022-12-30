import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "../index.css";
import "animate.css";
import { Layout } from "../components/Layout";
import Home from "../pages/Home";
import Venezuela from "../pages/Venezuela";
import ShippingForm from "../pages/ShippingForm";

const App = () => {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/destinos:venezuela" element={<Venezuela />} />
          <Route exact path="/shippingForm" element={<ShippingForm />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
};

export default App;
