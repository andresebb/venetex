import React, { useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../assets/images/header-logo.svg";
import Menu from "../assets/images/menu.svg";
import "../assets/styles/Header.css";

export const Header = () => {
  const [blackheader, setBlackHeader] = useState(false);
  const [lastScroll, setlastScroll] = useState(0);
  const [showNavBar, setshowNavBar] = useState(false);

  window.addEventListener("scroll", () => {
    let top = window.scrollY;
    setlastScroll(window.scrollY);

    if (top > lastScroll) {
      setBlackHeader(true);
    } else {
      setBlackHeader(false);
    }
  });

  const onHeaderClick = () => {
    setshowNavBar(!showNavBar);
  };

  return (
    <>
      <header className={blackheader ? "blackHeader" : "noBlackHeader"}>
        <div className="header-logos">
          <div className="logo-container">
            <Link to="/">
              <img src={Logo} alt="" />
            </Link>
          </div>
          <div className="menu-container" onClick={onHeaderClick}>
            <Link to="/">
              <img src={Menu} alt="" />
            </Link>
          </div>
        </div>
        <nav
          className={
            showNavBar ? "navbar-area showNavBar" : "navbar-area hideNavBar"
          }
        >
          <ul>
            <li>
              <Link className="nav-link">Destinos</Link>
            </li>
            <li>Ratrea tu envio</li>
            <li>Agendar Pick up</li>
            <li>Acerca de Nosotros</li>
            <li>Contactanos</li>
          </ul>
        </nav>
      </header>
    </>
  );
};
