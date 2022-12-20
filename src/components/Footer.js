import React from "react";
import "../assets/styles/Footer.css";
import logo from "../assets/images/header-logo.svg";
import location from "../assets/images/location.svg";
import email from "../assets/images/email.svg";
import facebook from "../assets/images/facebook.svg";
import instagram from "../assets/images/instagram.svg";
import phone from "../assets/images/phone.svg";
import { Link } from "react-router-dom";

export const Footer = () => {
  return (
    <div className="footer-area">
      <div className="footer-description">
        <img src={logo} alt="" />
        <p>
          Venetex Express es una empresa registrada y que cuenta con todos los
          derechos e izquierdos tambien colocar otra cosa por aca.
        </p>
      </div>
      <div className="footer-location">
        <h3>DALLAS</h3>
        <div className="location-box">
          <img src={location} alt="" />
          <p>985 E State Hwy 121 Business Suite 613, Lewisville, TX 75057</p>
        </div>
        <div className="location-box">
          <img src={location} alt="" />
          <p>17390 Preston Rd suite 240, Dallas, TX 75252</p>
        </div>
        <h3>Ofrecemos servicio pick up en:</h3>
        <div className="location-box">
          <img src={location} alt="" />
          <p>HOUSTON, AUSTIN, SAN ANTONIO, UTAH, KANSAS, MISSOURI</p>
        </div>
        <div className="location-box">
          <img src={phone} alt="" />
          <p>+1 469-618-3795</p>
        </div>
        <div className="location-box">
          <img src={email} alt="" />
          <p>admin@venetexexpress.com</p>
        </div>
      </div>
      <div className="footer-social-area">
        <div className="footer-social">
          <img src={facebook} alt="" />
        </div>
        <div className="footer-social">
          <img src={instagram} alt="" />
        </div>
        <div className="footer-social">
          <img src={phone} alt="" />
        </div>
      </div>
      <div className="footer-links">
        <h3>Quick Links</h3>
        <div className="footer-link">
          <div className="footer-triangle" />
          <Link className="footer-link-text">Contacto</Link>
        </div>
        <div className="footer-link">
          <div className="footer-triangle" />
          <Link className="footer-link-text">FAQ'S</Link>
        </div>
        <div className="footer-link">
          <div className="footer-triangle" />
          <Link className="footer-link-text">Dstinos</Link>
        </div>
        <div className="footer-link">
          <div className="footer-triangle" />
          <Link className="footer-link-text">Agendar Pick Up</Link>
        </div>
      </div>
      <span className="footer-reserve">
        © Copyright 2022 <span> VENETEX EXPRESS LLC</span> All Rights Reserved.
      </span>
    </div>
  );
};
