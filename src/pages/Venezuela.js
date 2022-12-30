import React from "react";
import "../assets/styles/Venezuela.css";
import venezuela from "../assets/images/venezuela.jpg";
import { Faq } from "../components/Faq";
import { Link } from "react-router-dom";
import arrow from "../assets/images/arrow-destinos.svg";

const prohibidos = [
  "armas",
  "municiones",
  "dinero (en cualquier presentacion)",
  "documentos",
  "drogas",
  "sustancias quimicas",
  "joyas",
  "armas blancas",
  "Entr otros",
];

const Venezuela = () => {
  return (
    <div className="venezuela-area">
      <div className="country-image-container">
        <div className="overlay-country" />
        <img className="country-image" src={venezuela} alt="" />
        <h1 className="country-name">VENEZUELA</h1>
      </div>
      <div className="country-information">
        <div className="country-service">
          <div className="country-time">
            <h2>
              Tiempos de <span className="yellow-letter"> Entrega</span>
            </h2>
            <div className="mobile-line">
              <div className="mobile-line-white" />
            </div>
            <p>
              Tenga en cuenta que estos tiempos a continuación sólo son un
              aproximado, estos pueden variar en ocasiones por condiciones de
              clima, retrazo en aduanas, entre otros. <br />
              <br />
              Los tiempos de entrega empiezan a correr a partir de la salida del
              barco o avion.
            </p>
          </div>
          <div>
            <div className="country-shipping">
              <h2>
                Envios <span className="yellow-letter">Maritimos</span>
              </h2>
              <p>Tiempo de entrega: 4 a 6 semanas</p>
              <p>Salida desde dallas: Todos los martes</p>
              <p>Salida para venezuela: Todos los viernes</p>
            </div>
            <div className="country-shipping">
              <h2>
                Envios <span className="yellow-letter">Aereos</span>
              </h2>
              <p>Tiempo de entrega: 12 dias habiles</p>
              <p>Salida desde dallas: Todos los martes</p>
              <p>Salida para venezuela: Todos los viernes</p>
            </div>
          </div>
        </div>
        <div className="articulos-prohibidos">
          <div>
            <h2>Articulos prohibidos</h2>
            <p>
              Ten encuenta que cada country tiene sus restricciones, estos son
              algunos de los articulos no permitidos.
            </p>
            <ul className="prohibidos-ul">
              {prohibidos.map((articulo) => (
                <li className="prohibidos-li">{articulo}</li>
              ))}
            </ul>
          </div>
        </div>
        <Faq />
        <div className="planilla-button-container">
          <Link
            className="planilla-button"
            to="/shippingForm"
            preventScrollReset={true}
          >
            <p>PLANILLA DE ENVIO</p>
            <div className="faq-button-image">
              <img src={arrow} alt="" />
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Venezuela;
