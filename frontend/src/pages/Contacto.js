//1.
import Header from "../components/Header";
import Footer from "../components/Footer";
import Breadcrumb from "../components/Breadcrumb";
import "../styles/Contacto.css";
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import swal from 'sweetalert';

//2.
function Contacto() {
    const mostrarAlerta=()=>{
       swal({
        title: "Formulario enviado con Éxito",
        text: "¡Gracias por enviar tus respuestas!",
        icon:"success",
        button: "Aceptar",
        timer: 5000
       }); 
    }

    const form = useRef();
  
    const sendEmail = (e) => {
      e.preventDefault();
      emailjs.sendForm('service_3xoinli', 'template_56do7f8', form.current, 'Rcwj3Ye9qbysWFOAd')
      .then((result) => {
        console.log(result.text);
      }, (error) => {
        console.log(error.text);
      });
    };
  //3.
  return (
    <>
      <Header />
      <Breadcrumb currentPage="Contacto" />
      <div className="imgs2">
        <div className="artesanos">
          <img
            className="fotos"
            src={require("../images/img-contacto/pc-tienda.png")}
          />
          <h3 className="preguntas">¿Quieres vender tus productos online?</h3>
        </div>
        <div className="artesanos">
          <img
            className="fotos"
            src={require("../images/img-contacto/servicio-cliente.png")}
          />
          <h3 className="preguntas">Atención y apoyo</h3>
        </div>
        <div className="artesanos">
          <img
            className="fotos"
            src={require("../images/img-contacto/cooperacion.png")}
          />
          <h3 className="preguntas">Cooperación sostenible</h3>
        </div>
      </div>

      <div className="container-contactar">
        <div className="contactar">
          <h2 className="tituloh2">¡Queremos saber de usted!</h2>
          <div className="formulario">
            <form className="formContacto" ref={form} onSubmit={sendEmail}>
              <label className="labelContacto">Name</label>
              <input className="inputContacto" type="text" name="user_name" require/>
              <label className="labelContacto">Email</label>
              <input className="inputContacto" type="email" name="user_email" require />
              <label className="labelContacto" require>Message</label>
              <textarea name="message" cols="30" rows="10" />
              <div className="submit-btn">
              <input className="botonEnviar" onClick={()=>mostrarAlerta()} type="submit" value="Send" />
              </div>
            </form>
          </div>
        </div>
      </div>

      <div className="detalles">
        <p>
          <b>Dirección:</b> Cancún, México
        </p>
        <p>
          <b>Sitio web:</b> ArtesanosWeb.com
        </p>
      </div>
      <p id="correo">
        <b>Correo electrónico:</b> artesanos@gmail.com
      </p>
      <Footer />
    </>
  );
}

//4.
export default Contacto;
