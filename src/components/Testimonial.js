import React from "react";
import "../assets/styles/Testimonial.css";

import quote from "../assets/images/quote.svg";
import avatar from "../assets/images/avatar.jpg";
import starEmpty from "../assets/images/star-empty.svg";
import starFull from "../assets/images/star-full.svg";
import mapaBackground from "../assets/images/mapa-fondo.png";

export const Testimonial = () => {
  return (
    <div
      className="testimonial-area"
      style={{ backgroundImage: `url(${mapaBackground})` }}
    >
      <div className="testimonial">
        <div className="testimonial-title">
          <div className="line-container destinos-line-container">
            <div className="line" />
            <h3 className="line-title">TESTIMONIOS</h3>
          </div>
          <div>
            <h2>
              Los Clientes
              <span className="yellow-letter"> Hablan </span>
            </h2>
            <div className="mobile-line">
              <div className="mobile-line-white" />
            </div>
          </div>
          <p>
            En esta seccion podras ver algunos de los testimonios de nuestros
            clientes a lo largo de los anos ofreciendo nuestro servicio
          </p>
        </div>
        <div className="testimonial-people">
          <div className="testimonial-box">
            <div className="testimonial-box-text">
              <img src={quote} alt="" />
              <p>
                La mejor empresa con la que he realizado un envio desde Estados
                Unidos a Venezuela, todo llego super rapido.
              </p>
            </div>
            <div className="testimonial-box-person">
              <img src={avatar} alt="" className="box-avatar" />
              <div className="box-person-name">
                <h4>Yosbelis Rodriguez</h4>
                <div className="box-stars">
                  <img className="box-star" src={starFull} alt="" />
                  <img className="box-star" src={starFull} alt="" />
                  <img className="box-star" src={starFull} alt="" />
                  <img className="box-star" src={starFull} alt="" />
                  <img className="box-star" src={starEmpty} alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="box-down">
          <div className="box-down-uno"></div>
          <div className="box-down-dos"></div>
          <div className="box-down-dos"></div>
          <div className="box-down-dos"></div>
        </div>
      </div>
    </div>
  );
};
