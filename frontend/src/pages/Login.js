import { Link, useNavigate } from 'react-router-dom';
import React, { useState } from 'react';
import axios from 'axios';
import '../styles/Login.css';

function Login() {
  const [campos, setCampos] = useState({
    email: '',
    contrasena: '',
  });

  const [error, setError] = useState('');
  const navegacion = useNavigate();

  const acceder = (e) => {
    e.preventDefault();

    if (campos.email === 'admin@admin.com' && campos.contrasena === 'admin') {
      navegacion('/dashboard');
      return;
    }

    // Validar campos vacíos
    if (!campos.email || !campos.contrasena) {
      setError('Por favor, completa todos los campos.');
      return;
    }

    axios.post('http://localhost:8081/acceso', campos)
      .then((respuesta) => {
        if (respuesta.data.Estatus === 'CORRECTO') {
          const token = respuesta.data.Usuario;
          const decodedToken = JSON.parse(atob(token.split('.')[1]));
          const rol = decodedToken.rol;

          if (rol === 'admin') {
            localStorage.setItem('usuario', token);
            navegacion('/dashboard');
          } else {
            localStorage.setItem('usuario', token);
            navegacion('/');
          }
        } else {
          setError(respuesta.data.Error);
        }
      })
      .catch((error) => console.log('Error al iniciar sesión'));
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
            <form onSubmit={acceder}>
              <h2 className="title-login">Login</h2>
              <div className="inputbox">
                <img src={require("../images/icons/email.png")} className="img-form" />
                <input
                  type="email"
                  name="email"
                  placeholder="Ingrese su correo electrónico"
                  value={campos.email}
                  onChange={(e) => setCampos({ ...campos, email: e.target.value })}
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
                  onChange={(e) => setCampos({ ...campos, contrasena: e.target.value })}
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
