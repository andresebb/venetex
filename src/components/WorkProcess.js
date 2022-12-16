import React from "react";
import "../assets/styles/WorkProcess.css";
import pickup from "../assets/images/pickup-logo.svg";
import warehouse from "../assets/images/warehouse-logo.svg";
import packing from "../assets/images/packing-logo.svg";
import truck from "../assets/images/transportation-logo.svg";

export const WorkProcess = () => {
  return (
    <div className="work-process">
      <div className="work-process-area">
        <div className="work-text">
          <div className="line-container destinos-line-container">
            <div className="line" />
            <h3 className="line-title">PROCESO DE TARBAJO</h3>
          </div>
          <div>
            <h2>
              Primera Vez Que
              <span className="yellow-letter"> Envias? </span>
            </h2>
            <div className="mobile-line">
              <div className="mobile-line-white" />
            </div>
          </div>
          <p>
            Si es la primera vez que envias con nosotros estos son los pasos a
            seguir.
          </p>
        </div>
        <div className="work-steps">
          <div className="work-step-box work-step-one">
            <div className="work-logo-container">
              <span className="work-step-number">01</span>
              <img src={pickup} alt="" />
            </div>
            <h3>Pick Up</h3>
            <p>
              Puedes dejar tu caja en cualquiera de nuestras sucursales o
              nosotros podemos ir por ellas.
            </p>
          </div>
          <div className="work-step-box work-step-one">
            <div className="work-logo-container">
              <span className="work-step-number">02</span>
              <img src={warehouse} alt="" />
            </div>
            <h3>Warehouse</h3>
            <p>
              Una vez tus cajas se encuentren en nuestra oficina procederemos a
              realizar la guia.
            </p>
          </div>
          <div className="work-step-box work-step-one">
            <div className="work-logo-container">
              <span className="work-step-number">03</span>
              <img src={packing} alt="" />
            </div>
            <h3>Packing</h3>
            <p>
              Ya realizada tu guia, tus cajas se preapararan para su empalateda
              junto a otras.
            </p>
          </div>
          <div className="work-step-box work-step-one">
            <div className="work-logo-container">
              <span className="work-step-number">04</span>
              <img src={truck} alt="" />
            </div>
            <h3>Transportation</h3>
            <p>LLegado el dia de despacho tus cajas se preparan para salir.</p>
          </div>
        </div>
      </div>
    </div>
  );
};
