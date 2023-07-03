//1.
import React from 'react';
import Header from "../components/Header";
import "../styles/Artesanos.css";

//2.
function Artesanos() {
    //3.
    return (
        <>
            <Header />
            <h2>CONOZCA A NUESTROS SOCIOS ARTESANOS</h2>
            <p>No somos solo una simple tienda online de productos de arte; somos un grupo de personas que trabajamos mano a
                mano con artesanos para que podamos ayudarles a contar las historias de todas esas personas detrás de cada
                producto hecho a mano.
                Cada compra en nuestra tienda crea oportunidades para usted, utilizando diversas técnicas tradicionales,
                culturales e innovadoras para crear piezas hechas a mano que promueven el comercio justo, el consumo responsable
                y la sostenibilidad.</p>

            <div className="imgs">
                <div className="artesanos">
                    <img className="fotos"
                        src={require("../images/img-contacto/artesanos/artesano1.png")} />
                    <h3 className="preguntas">Graciela Avendaño</h3>
                </div>
                <div className="artesanos">
                    <img className="fotos" src={require("../images/img-contacto/artesanos/artesano2.png")} />
                    <h3 className="preguntas">Rafa</h3>
                </div>
                <div className="artesanos">
                    <img className="fotos"
                        src={require("../images/img-contacto/artesanos/artesano3.png")} />
                    <h3 className="preguntas">David</h3>
                </div>
                <div className="artesanos">
                    <img className="fotos"
                        src={require("../images/img-contacto/artesanos/artesano4.png")} />
                    <h3 className="preguntas">Alejandra Fernández</h3>
                </div>
                <div className="artesanos">
                    <img className="fotos" src={require("../images/img-contacto/artesanos/artesano5.png")} />
                    <h3 className="preguntas">Claudia</h3>
                </div>
                <div className="artesanos">
                    <img className="fotos"
                        src={require("../images/img-contacto/artesanos/artesano6.png")} />
                    <h3 className="preguntas">Josué Giménez</h3>
                </div>
            </div>

            <footer>
                <p>Todos los derechos reservados &copy; | SM-33 | Andrés Garcia Leyva | Gael Aldair Marquez Peralta</p>
            </footer>

        </>
    );
}

//4.
export default Artesanos; 