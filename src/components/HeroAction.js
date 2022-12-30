import React from "react";

import "../assets/styles/HeroAction.css";

import { FaLocationArrow } from "react-icons/fa";
import { FaTruck } from "react-icons/fa";
import { FaFingerprint } from "react-icons/fa";
import { FaCalculator } from "react-icons/fa";

export const HeroAction = () => {
  return (
    <div className="hero-action">
      <div className="hero-action-box rastreo">
        <FaLocationArrow />
        <h3>Rastrea carga</h3>
        <p>Solo necesitas tu numero de recibo para realizar el rastreo</p>
      </div>
      <div className="hero-action-box pickup">
        <div>
          <FaTruck />
        </div>
        <h3 className="truck-action animate__flipInX">Angendar Pickup</h3>
        <p>
          Si necesitas agendar un pickup solo nos tienes que dejar saber con
          anticipacion.
        </p>
      </div>
      <div className="hero-action-box casillero">
        <FaFingerprint />
        <h3>Apertura Casillero</h3>
        <p>
          Si necesitas hacer tus compras en estados unidos nosotros podemos ser
          tu casillero.
        </p>
      </div>
      <div className="hero-action-box envio">
        <FaCalculator />
        <h3>Calcular Envio</h3>
        <p>
          Si tienes algo que no cumple con las medidas regulares de una caja
          aqui puede calcular el precio.
        </p>
      </div>
    </div>
  );
};
