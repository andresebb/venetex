import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import "../index.css";
import Venezuela from "../pages/Venezuela";
import { Layout } from "../components/Layout";

const App = () => {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/destinos:venezuela" element={<Venezuela />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
};

export default App;
