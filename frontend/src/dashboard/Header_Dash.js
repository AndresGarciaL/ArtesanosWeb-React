import React, { useState, useContext } from "react";
import "./styles/Header_Dash.css";
import { Link } from "react-router-dom";
import LoginButton from "../components/LoginButton";
import BurgerButton from "../components/BurgerButton";

function Header_Dash() {
  const [clicked, setClicked] = useState(false);
  const handleClick = () => {
    setClicked(!clicked);
  };

  return (
    <header>
      <nav className="nav-container-dash">
        <div className="logo-nav-dash">
          <Link to="/">
            <img src={require("../images/Logo_blanco_artWeb.png")} alt="" />
          </Link>
        </div>
        <div className="container-icons">
          <LoginButton clicked={clicked} handleClick={handleClick} />
          <BurgerButton clicked={clicked} handleClick={handleClick} />
        </div>
      </nav>
    </header>
  );
}

export default Header_Dash;
