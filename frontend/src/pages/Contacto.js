//1.
import React from 'react';
import Header from "../components/Header";
import Footer from "../components/Footer";
import "../styles/Contacto.css";

//2.
function Contacto() {
    //3.
    return (
        <>
            <Header />
            <div className="imgs">
                <div className="artesanos">
                    <img className="fotos"
                        src={require("../images/img-contacto/pc-tienda.png")} />
                    <h3 className="preguntas">¿Quieres vender tus productos online?</h3>
                </div>
                <div className="artesanos">
                    <img className="fotos" src={require("../images/img-contacto/servicio-cliente.png")} />
                    <h3 className="preguntas">Atención y apoyo</h3>
                </div>
                <div className="artesanos">
                    <img className="fotos"
                        src={require("../images/img-contacto/cooperacion.png")} />
                    <h3 className="preguntas">Cooperación sostenible</h3>
                </div>
            </div>

            <div className="contactar">
                <h2>¡Queremos saber de usted!</h2>
                <div className="formulario">
                    <form accion="#" method="#">
                        <label>Nombre</label>
                        <input type="text" name="nombre-completo" value="" placeholder="Ingresa tu nombre" />
                        <label>Correo electrónico</label>
                        <input type="email" name="correo-electronico" value="" placeholder="Ingresa tu e-mail" />
                        <label>Mensaje</label>
                        <textarea name="mensaje" cols="30" rows="10"></textarea>
                        <div className="terminos">
                            <label>Acepto los términos y condiciones</label>
                            <input type="checkbox" name="checkbox" value="" required />
                        </div>
                    </form>

                </div>
            </div>

            <div id="boton">
                <button>Enviar</button>
            </div>

            <div className="detalles">
                <p><b>Dirección:</b> Cancún, México</p>
                <p><b>Sitio web:</b> ArtesanosWeb.com</p>
            </div>
            <p id="correo"><b>Correo electrónico:</b> artesanos@gmail.com</p>
            <Footer />
        </>
    );
}

//4.
export default Contacto; 