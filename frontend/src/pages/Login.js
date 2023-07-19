import { Link, useNavigate } from 'react-router-dom';
import React, { useState } from 'react';
import axios from 'axios';
import '../styles/Login.css';
import jwt_decode from 'jwt-decode';

function Login() {
  const [campos, setCampos] = useState({
    email: "",
    contrasena: ""
  });
  const navegacion = useNavigate();
  const [error, setError] = useState('');
  const [rol_id, setRolId] = useState(null); // Estado para almacenar el rol_id del usuario

  function checaEmail(valor) {
    if (valor.includes('')) {
      setCampos({ ...campos, email: valor });
    }
  }

  const redireccionarSegunRol = (rol_id) => {
    if (rol_id === 1) {
      navegacion('/Dashboard');
    } else if (rol_id === 2) {
      navegacion('/');
    } else {
      setError("Usuario desconocido");
    }
  };

  const autenticar = (event) => {
    event.preventDefault();
    axios.post('http://localhost:8081/login', campos)
      .then(respuesta => {
        if (respuesta.data.Estatus === 'CORRECTO') {
          const usuarioToken = respuesta.data.Usuario;
          localStorage.setItem('usuario', usuarioToken);

          if (typeof usuarioToken === "string") {
            const decodedToken = jwt_decode(usuarioToken);

            setRolId(decodedToken.usuario); // Guarda el rol_id en el estado
            redireccionarSegunRol(decodedToken.usuario); // Redirige al usuario según su rol_id
          console.log(decodedToken)
          } else {
            setError("Token inválido");
          }
        } else {
          setError(respuesta.data.Error);
        }
      })
      .catch(error => console.log(error));
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
            <form onSubmit={autenticar}>
              <h2 className="title-login">Login</h2>
              <div className="inputbox">
                <img src={require("../images/icons/email.png")} className="img-form" />
                <input
                  type="email"
                  name="email"
                  placeholder="Ingrese su correo electrónico"
                  value={campos.email}
                  onChange={e => checaEmail(e.target.value)}
                />
                <label htmlFor="">Email</label>
              </div>
              <div className="inputbox">
                <img src={require("../images/icons/candado.png")} className="img-form" />
                <input
                  type="password"
                  name="contrasena"
                  placeholder="Ingrese su contraseña"
                  value={campos.contrasena}
                  onChange={e => setCampos({ ...campos, contrasena: e.target.value })}
                />
                <label htmlFor="">Contraseña</label>
              </div>
              <div className="forget">
                <label htmlFor="">
                  <a href="#">¿Olvidaste tu contraseña?</a>
                </label>
              </div>
              <button type="submit" className="button-inicio-sesion">Iniciar Sesion</button>
              {error && <p>{error}</p>}
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
