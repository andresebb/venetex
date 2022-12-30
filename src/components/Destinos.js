import React from "react";
import "../assets/styles/Destinos.css";
import arrow from "../assets/images/arrow-destinos.svg";
import venezuela from "../assets/images/venezuela.jpg";
import mexico from "../assets/images/mexico.jpg";
import colombia from "../assets/images/colombia.jpg";
import dominicana from "../assets/images/dominicana.jpg";
import peru from "../assets/images/peru.jpg";
import ecuador from "../assets/images/ecuador.jpg";
import honduras from "../assets/images/honduras.jpg";
import costarica from "../assets/images/costa-rica.jpg";
import { Link } from "react-router-dom";

export const Destinos = () => {
  return (
    <div className="destinos-area">
      <div className="destinos-shape-uno" />
      <div className="destinos-shape-dos" />
      <div className="destinos-container">
        <div className="destinos-text">
          <div className="line-container destinos-line-container">
            <div className="line" />
            <h3 className="line-title">DESTINOS</h3>
          </div>
          <div>
            <h2>
              Nuestros
              <span className="yellow-letter"> Destinos </span>
            </h2>
            <div className="mobile-line">
              <div className="mobile-line-white" />
            </div>
          </div>
          <p>
            Dependiendo del pais al que vayas a enviar ofrecemos distintos
            metodos de envio. Selecciona el tuyo!!
          </p>
        </div>
        <div className="destinos-image-box">
          <div className="destinos-box-shape-uno" />
          <div className="destinos-box-shape-dos" />
          <div className="destinos-box-shape-tres" />
          <div className="destinos-box-shape-cuatro" />
          <div className="destinos-images">
            <Link
              to={`destinos:venezuela`}
              className="destinos-image-container animate__backInLeft"
              preventScrollReset={false}
            >
              <div className="destinos-overlay">VENEZUELA</div>
              <img src={arrow} alt="" className="destinos-arrow" />
              <img src={venezuela} alt="" className="image-destinos" />
            </Link>
            <div className="destinos-image-container animate__backInRight">
              <div className="destinos-overlay">MEXICO</div>
              <img src={arrow} alt="" className="destinos-arrow" />
              <img src={mexico} alt="" className="image-destinos" />
            </div>
            <div className="destinos-image-container animate__backInLeft">
              <div className="destinos-overlay">COLOMBIA</div>
              <img src={arrow} alt="" className="destinos-arrow" />
              <img src={colombia} alt="" className="image-destinos" />
            </div>
            <div className="destinos-image-container animate__backInRight">
              <div className="destinos-overlay">DOMINICANA</div>
              <img src={arrow} alt="" className="destinos-arrow" />
              <img src={dominicana} alt="" className="image-destinos" />
            </div>
            <div className="destinos-image-container">
              <div className="destinos-overlay">PERU</div>
              <img src={arrow} alt="" className="destinos-arrow" />
              <img src={peru} alt="" className="image-destinos" />
            </div>
            <div className="destinos-image-container">
              <div className="destinos-overlay">ECUADOR</div>
              <img src={arrow} alt="" className="destinos-arrow" />
              <img src={ecuador} alt="" className="image-destinos" />
            </div>
            <div className="destinos-image-container">
              <div className="destinos-overlay">HONDURAS</div>
              <img src={arrow} alt="" className="destinos-arrow" />
              <img src={honduras} alt="" className="image-destinos" />
            </div>
            <div className="destinos-image-container">
              <div className="destinos-overlay">COSTA RICA</div>
              <img src={arrow} alt="" className="destinos-arrow" />
              <img src={costarica} alt="" className="image-destinos" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
