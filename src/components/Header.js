import React, { useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../assets/images/header-logo.svg";
import Menu from "../assets/images/menu.svg";
import "../assets/styles/Header.css";

export const Header = () => {
  const [blackheader, setBlackHeader] = useState(false);
  const [lastScroll, setlastScroll] = useState(0);

  window.addEventListener("scroll", () => {
    let top = window.scrollY;
    setlastScroll(window.scrollY);

    if (top > lastScroll) {
      setBlackHeader(true);
    } else {
      setBlackHeader(false);
    }
  });

  return (
    <>
      <header className={blackheader ? "blackHeader" : "noBlackHeader"}>
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
