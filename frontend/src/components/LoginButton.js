import React, { useState } from "react";
import "../styles/LoginButton.css";
import { Link } from "react-router-dom";
import { useNavigate } from 'react-router-dom';

function LoginButton() {
  const [clicked, setClicked] = useState(false);
  const [login, setLogin] = useState(localStorage.getItem('usuario') || false); // Inicializamos el estado 'login' con el valor del localStorage o false
  const navegacion = useNavigate();

  const handleClick = () => {
    setClicked(!clicked);
  };

  const salir = () => {
    localStorage.removeItem('usuario');
    localStorage.removeItem('token'); // Limpiamos también el token del localStorage al salir
    setLogin(false); // Actualizamos el estado para reflejar que el usuario ha cerrado sesión
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
