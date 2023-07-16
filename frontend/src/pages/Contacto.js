import React from 'react';
import Header from "../components/Header";
import Footer from "../components/Footer";
import Breadcrumb from "../components/Breadcrumb";
import axios from 'axios';
import "../styles/Contacto.css";

function Contacto() {
  const [formData, setFormData] = React.useState({
    nombre: '',
    correo: '',
    mensaje: ''
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    sendEmail();
  };

  const sendEmail = () => {
    const { nombre, correo, mensaje } = formData;

    axios.post('http://localhost:8081/enviarform', { nombre, email: correo, mensaje })
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => {
        console.error('Error al enviar el formulario:', error);
      });
  };

  return (
    <>
      <Header />
      <Breadcrumb currentPage="Contacto" />
      <div className="imgs2">
        <div className="artesanos">
          <img className="fotos" src={require("../images/img-contacto/pc-tienda.png")} alt="Imagen de tienda en línea" />
          <h3 className="preguntas">¿Quieres vender tus productos online?</h3>
        </div>
        <div className="artesanos">
          <img className="fotos" src={require("../images/img-contacto/servicio-cliente.png")} alt="Imagen de servicio al cliente" />
          <h3 className="preguntas">Atención y apoyo</h3>
        </div>
        <div className="artesanos">
          <img className="fotos" src={require("../images/img-contacto/cooperacion.png")} alt="Imagen de cooperación sostenible" />
          <h3 className="preguntas">Cooperación sostenible</h3>
        </div>
      </div>

      <div className='container-contactar'>
        <div className="contactar">
          <h2 className="tituloh2">¡Queremos saber de usted!</h2>
          <div className="formulario">
            <form className="formContacto" onSubmit={handleSubmit}>
              <label className="labelContacto">Nombre</label>
              <input
                className="inputContacto"
                type="text"
                name="nombre"
                value={formData.nombre}
                onChange={handleInputChange}
                placeholder="Ingresa tu nombre"
              />
              <label className="labelContacto">Correo electrónico</label>
              <input
                className="inputContacto"
                type="email"
                name="correo"
                value={formData.correo}
                onChange={handleInputChange}
                placeholder="Ingresa tu e-mail"
              />
              <label className="labelContacto">Mensaje</label>
              <textarea
                name="mensaje"
                cols="30"
                rows="10"
                value={formData.mensaje}
                onChange={handleInputChange}
              ></textarea>
              <div className="terminos">
                <label>Acepto los términos y condiciones</label>
                <input className="inputCheck" type="checkbox" name="checkbox" value="" required />
              </div>
              <button type="submit" className="botonEnviar">Enviar</button>
            </form>
          </div>
        </div>
      </div>

      <div className="detalles">
        <p><b>Dirección:</b> Cancún, México</p>
        <p><b>Sitio web:</b> ArtesanosWeb.com</p>
      </div>
      <p id="correos">Para contactar al equipo de soporte técnico, envíe un correo electrónico a: <a href="mailto:soporte@artesanosweb.com">soporte@artesanosweb.com</a></p>
      <Footer />
    </>
  );
}

export default Contacto;
