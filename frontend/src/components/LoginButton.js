import React, { useState } from "react";
import "../styles/LoginButton.css";
import { Link } from "react-router-dom";

function LoginButton(){
    const [clicked, setClicked] = useState(false);
    const handleClick = () => {
      setClicked(!clicked);
    };

return(

<div className="dropdown">
<img
  src={require("../images/icons/usuario.png")}
  alt=""
  onClick={handleClick}
/>
{clicked && (
  <div className="dropdown-content">
    <Link to="/iniciar-sesion">iniciar sesión</Link>
    <Link to="/registrarse">registrarse</Link>
  </div>
)}
</div>
);
}

export default LoginButton;



