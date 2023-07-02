import React from "react";
import "../styles/Register.css";

function Register(){
    return (
        <>
       <section>
  <div id="img">
<a href="/">
<img src={require("../images/logo-Artesanos-150px.png")} className="logo-form" />
</a>
  </div>
  <div className="form-box">
    <div className="form-value">
      <form action="">
        <h2 className="title">Registro</h2>
        <div className="inputbox">
        <img src={require("../images/icons/usuario.png")} className="img-form" />
          <input type="email" required="" />
          <label htmlFor="">Nombre y apellidos</label>
        </div>
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
        <div className="inputbox">
        <img src={require("../images/icons/candado.png")} className="img-form" />
          <input type="password" required="" />
          <label htmlFor="">Confirma la Contraseña</label>
        </div>
        <button className="button-inicio-sesion">Registrarme</button>
        <div className="register">
          <p>
          Ya tengo una cuenta <a href="/register.html"> Iniciar Sesion</a>
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
export default Register;