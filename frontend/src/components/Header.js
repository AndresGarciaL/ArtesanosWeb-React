import React, { useState } from "react";
import "../styles/Header.css";
import { Link } from "react-router-dom";
import BurgerButton from './BurgerButton';
import LoginButton from "./LoginButton";

function Header() {
  const [clicked, setClicked] = useState(false);
  const handleClick = () => {
    setClicked(!clicked);
  };

  return (
    <header>
      <nav className="nav-container">
        <div className="logo-nav">
          <Link to="/">
            <img src={require("../images/Logo_blanco_artWeb.png")} alt="" />
          </Link>
        </div>
        <ul className={`ul-nav ${clicked ? 'active' : ''}`}>
          <li>
            <Link className={clicked ? 'active' : ''} to="/">
              Inicio
            </Link>
          </li>
          <li>
            <Link to="/Tienda">
              Tienda
            </Link>
          </li>
          <li>
            <Link to="/Artesanos">Artesanos</Link>
          </li>
          <li>
            <Link to="/Conocenos">
              Conócenos
            </Link>
          </li>
          <li>
            <Link to="/Contacto">
              Contacto
            </Link>
          </li>
        </ul>

        <div className="container-icons">
          <Link to="/">
            <img src={require("../images/icons/corazon.png")} alt="" />
          </Link>
          <Link to="/">
            <img src={require("../images/icons/carrito-de-compras.png")} alt="" />
          </Link>
          <LoginButton clicked={clicked} handleClick={handleClick} />
          <BurgerButton clicked={clicked} handleClick={handleClick} />
        </div>
      </nav>
    </header>
  );
}

export default Header;
