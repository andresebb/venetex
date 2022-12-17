import React from "react";
import "../assets/styles/Counter.css";
import box from "../assets/images/box.svg";
import customer from "../assets/images/people.svg";
import truck from "../assets/images/truck.svg";
import destinos from "../assets/images/destinos.svg";

export const Counter = () => {
  return (
    <div className="counter-area">
      <div className="counter-box">
        <div className="counter-image">
          <img src={box} alt="" />
        </div>
        <span>3600</span>
        <h6>+ Entregas Realizadas</h6>
      </div>
      <div className="counter-box">
        <div className="counter-image">
          <img src={customer} alt="" />
        </div>
        <span>1200</span>
        <h6>+ Clientes Activos</h6>
      </div>
      <div className="counter-box">
        <div className="counter-image">
          <img src={truck} alt="" />
        </div>
        <span>600</span>
        <h6>+ Pick Up Realizados</h6>
      </div>
      <div className="counter-box">
        <div className="counter-image">
          <img src={destinos} alt="" />
        </div>
        <span>8</span>
        <h6>+ Destinos alcanzados</h6>
      </div>
    </div>
  );
};
