import React from "react";
import { Link } from "react-router-dom";

import "../assets/styles/Faq.css";
import arrow from "../assets/images/arrow-destinos.svg";
import faqArrow from "../assets/images/faq-arrow.svg";
import question from "../assets/images/question.svg";

export const Faq = () => {
  return (
    <div className="faq-area">
      <div className="faq-container">
        <div className="line-container">
          <div className="line" />
          <h3 className="line-title">FAQ'S</h3>
        </div>
        <h2>
          Preguntas
          <span className="yellow-letter"> Frecuentes </span>
          Al Realizar un envio
        </h2>
        <p className="faq-text">
          Si es la primera vez que realizas un envio con nosotros seguramente te
          estas preguntando algunas de las siguientes preguntas.
          <br />
          <br />
          Para mas informacion te puedes comunicar con nosotros a traves del
          whatsapp.
        </p>
        <div className="faq-button-container">
          <Link className="faq-button">
            <p>PREGUNTA</p>
            <div className="faq-button-image">
              <img src={arrow} alt="" />
            </div>
          </Link>
        </div>
      </div>
      <div className="faq-container-dos">
        <div className="faq-box">
          <div className="faq-box-top">
            <div className="faq-box-question">
              <div>
                <img src={question} alt="" />
              </div>
              <span>Donde puedo conseguir las cajas?</span>
            </div>
            <div>
              <img src={faqArrow} alt="" />
            </div>
          </div>
          <div className="faq-box-text">
            <p>
              Las cajas las puedes conseguir en home depot o lowe’s, estas traen
              el tamano de la caja en un lado y estas tienen ser heavy duty para
              evitar extra cargos.
            </p>
          </div>
        </div>
        <div className="faq-box">
          <div className="faq-box-top">
            <div className="faq-box-question">
              <div>
                <img src={question} alt="" />
              </div>
              <span>Donde puedo conseguir las cajas?</span>
            </div>
            <div>
              <img src={faqArrow} alt="" />
            </div>
          </div>
          {/* <div className="faq-box-text">
            <p>
              Las cajas las puedes conseguir en home depot o lowe’s, estas traen
              el tamano de la caja en un lado y estas tienen ser heavy duty para
              evitar extra cargos.
            </p>
          </div> */}
        </div>
        <div className="faq-box">
          <div className="faq-box-top">
            <div className="faq-box-question">
              <div>
                <img src={question} alt="" />
              </div>
              <span>Donde puedo conseguir las cajas?</span>
            </div>
            <div>
              <img src={faqArrow} alt="" />
            </div>
          </div>
          {/* <div className="faq-box-text">
            <p>
              Las cajas las puedes conseguir en home depot o lowe’s, estas traen
              el tamano de la caja en un lado y estas tienen ser heavy duty para
              evitar extra cargos.
            </p>
          </div> */}
        </div>
      </div>
    </div>
  );
};
