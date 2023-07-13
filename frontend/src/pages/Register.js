import "../styles/Register.css";
import { useNavigate } from 'react-router-dom';
import React, { useState } from 'react';
import axios from 'axios';

function Register() {
  const [campos, setCampos] = useState({
    nombre: '',
    email: '',
    contrasena: ''
  });
  
  const [error, setError] = useState('');
  const [mostrarError, setMostrarError] = useState(false);

  const navegacion = useNavigate();

  const registrarUsuario = (e) => {
    e.preventDefault();

    // Verificar si hay campos vacíos
    if (campos.nombre === '' || campos.email === '' || campos.contrasena === '') {
      setError('Completa todos los campos correctamente ⚠︎');
      setMostrarError(true);
      return;
    }

    // Resetear el mensaje de error
    setError('');
    setMostrarError(false);

    axios.post('http://localhost:8081/registrar', campos)
      .then(respuesta => {
        if (respuesta.data.Estatus === 'CORRECTO') {
          navegacion('/login');
        } else {
          setError('Error al registrar usuario');
          setMostrarError(true);
        }
      })
      .catch(error => {
        console.log('Error al registrar usuario', error);
        setError('Error al registrar usuario');
        setMostrarError(true);
      });
  };

  return (
    <>
      <section className="section">
        <div id="img">
          <a href="/">
            <img src={require("../images/logo-Artesanos-150px.png")} className="logo-form" />
          </a>
        </div>
        <div className="form-box">
          <div className="form-value">
            <form onSubmit={registrarUsuario}>
              <h2 className="title-register">Registro</h2>
              <div className="inputbox">
                <img src={require("../images/icons/usuario.png")} className="img-form" />
                <input type="text"
                  name="nombre"
                  placeholder="Ingresa tu nombre completo"
                  value={campos.nombre}
                  onChange={(e) => setCampos({ ...campos, nombre: e.target.value })}
                />
                <label htmlFor="">Nombre completo</label>
              </div>
              <div className="inputbox">
                <img src={require("../images/icons/email.png")} className="img-form" />
                <input type="email"
                  name="email"
                  placeholder="Ingresa tu correo electrónico"
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
                  placeholder="Ingresa tu contraseña"
                  value={campos.contrasena}
                  onChange={(e) => setCampos({ ...campos, contrasena: e.target.value })}
                />
                <label htmlFor="">Contraseña</label>
              </div>

              {mostrarError && <p className="error">{error}</p>}
              <button type="submit" className="button-inicio-sesion">Registrarme</button>
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