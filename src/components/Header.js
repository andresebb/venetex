import React from "react";
import { Link } from "react-router-dom";
import Logo from "../assets/images/header-logo.svg";
import Menu from "../assets/images/menu.svg";
import "../assets/styles/Header.css";

export const Header = () => {
  return (
    <>
      <header className="header">
        <div className="logo-container">
          <Link to="/">
            <img src={Logo} alt="" />
          </Link>
        </div>
        <div className="menu-container">
          <Link to="/">
            <img src={Menu} alt="" />
          </Link>
        </div>
      </header>
    </>
  );
};
