import React, { useState } from "react";
import "../styles/LoginButton.css";
import { Link } from "react-router-dom";
import { useNavigate } from 'react-router-dom';

function LoginButton() {
  const [clicked, setClicked] = useState(false);
  const handleClick = () => {
    setClicked(!clicked);
  };

  const login = localStorage.getItem('usuario');
  const navegacion = useNavigate();

  const salir = () => {
    localStorage.removeItem('usuario');
    navegacion('/');
  }

  return (
    <div className="dropdown">
      <img
        src={require("../images/icons/usuario.png")}
        alt=""
        onClick={handleClick}
      />
      {clicked && (
        <div className="dropdown-content">
          {!login ? (
            <>
              <Link to={'/Login/'}>Iniciar sesión</Link>
              <Link to={'/Register/'}>Registrarse</Link>
            </>
          ) : (
            <button className="dropdown-content" onClick={salir}>Salir</button>
          )}
        </div>
      )}
    </div>
  );
}

export default LoginButton;
