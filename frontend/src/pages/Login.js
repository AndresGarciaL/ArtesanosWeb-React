import React, { useState, useEffect, useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { UserContext } from '../components/UserContext';
import '../styles/Login.css';

function Login() {
  const [body, setBody] = useState({
    email: "",
    contrasena: ""
  });
  const [errores, setErrores] = useState({});
  const { usuario, obtenerUsuarioActual } = useContext(UserContext);
  const navigate = useNavigate();

  useEffect(() => {
    const verificarSesion = localStorage.getItem("token");
    if (verificarSesion && !usuario) {
      navigate("/");
    }
  }, [usuario, navigate]);

  const cambioEntrada = (e) => {
    setBody({ ...body, [e.target.name]: e.target.value });
    setErrores({ ...errores, [e.target.name]: "" });
  };

  const Enviar = async (e) => {
    e.preventDefault(); // Evita que se realice la acción por defecto del submit.

    setErrores({ email: "", contrasena: "" });

    if (!body.email || !body.contrasena) {
      setErrores((prevErrores) => ({
        ...prevErrores,
        email: body.email ? "" : "Debe llenar todos los campos.",
        contrasena: body.contrasena ? "" : "Debe llenar todos los campos."
      }));
      return;
    }

    try {
      const verificarCorreo = await axios.post("http://localhost:8081/VerificarCorreo", { email: body.email });
      if (verificarCorreo.data.Estatus === "CORRECTO") {
        return setErrores({ email: "El usuario que ingresaste no existe." });
      }

      const verificarUsuario = await axios.post("http://localhost:8081/login", body);
      if (verificarUsuario.data.Estatus === "CORRECTO") {
        localStorage.setItem("token", verificarUsuario.data.token);
        await obtenerUsuarioActual();
        navigate("/Dashboard");
      } else {
        setErrores({ contrasena: "Email o Contraseña incorrecta." });
      }
    } catch (error) {
      console.log("Se produjo un error: ", error);
    }
  };

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
            <form onSubmit={Enviar}>
              <h2 className="title-login">Login</h2>
              <div className="inputbox">
                <img src={require("../images/icons/email.png")} className="img-form" alt="Email icon" />
                <input
                  type="email"
                  name="email"
                  placeholder="Ingrese su correo electrónico"
                  value={body.email}
                  onChange={cambioEntrada}
                />
                <label htmlFor="email">Email</label>
              </div>
              <div className="inputbox">
                <img src={require("../images/icons/candado.png")} className="img-form" alt="Password icon" />
                <input
                  type="password"
                  name="contrasena"
                  placeholder="Ingrese su contraseña"
                  value={body.contrasena}
                  onChange={cambioEntrada}
                />
                <label htmlFor="contrasena">Contraseña</label>
              </div>
              <div className="forget">
                <label>
                  <Link to="/olvidaste-contrasena">¿Olvidaste tu contraseña?</Link>
                </label>
              </div>
              <button type="submit" className="button-inicio-sesion"  onClick={Enviar}>Iniciar Sesion</button>
              {errores.email && <p>{errores.email}</p>}
              {errores.contrasena && <p>{errores.contrasena}</p>}
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

export default Login;
