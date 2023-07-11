import React from "react";
import "../styles/Login.css";
import { Link } from "react-router-dom";


function Login(){
    return (
        <>
       <section className="section-login">
  <div id="img">
<a href="/">
<img src={require("../images/logo-Artesanos-150px.png")} className="logo-form" />
</a>
  </div>
  <div className="form-box-login">
    <div className="form-value">
      <form action="">
      <h2 className="title-login">Login</h2>
        <div className="inputbox">
        <img src={require("../images/icons/email.png")} className="img-form" />
          <input type="email" required="" />
          <label htmlFor="">Email</label>
        </div>
        <div className="inputbox">
        <img src={require("../images/icons/candado.png")} className="img-form" />
          <input type="password" required="" />
          <label htmlFor="">Contraseña</label>
        </div>
        <div className="forget">
          <label htmlFor="">
          <a href="#">¿Olvidaste tu contraseña?</a>
          </label>
        </div>
        <button className="button-inicio-sesion">Iniciar Sesion</button>
        <div className="register">
          <p>
            No tengo una cuenta <Link to={'/Register/'}>Registrarme</Link>
            
          </p>
        </div>
      </form>
    </div>
  </div>
</section>

        </>
    );
}

//3.- exportamos
export default Login;