//1.
import React from 'react';
import Header from "../components/Header";
import Footer from "../components/Footer";
import "../styles/Inicio.css";
import { Link } from "react-router-dom";

//2.
function Inicio() {
    //3.
    return (
        <>
            <Header />
<section>
  <div id="carouselExampleAutoplaying"className="carousel slide"data-bs-ride="carousel">
    <div className="carousel-inner">
      <div className="carousel-item active">
        <img
          src={require("../images/Home/Bienvenida.png")}
          className="d-block w-100"
          alt="..."
        />
      </div>
      
    </div>
    
    <button
      className="carousel-control-prev"
      type="button"
      data-bs-target="#carouselExampleAutoplaying"
      data-bs-slide="prev"
    >
      <span className="carousel-control-prev-icon" aria-hidden="true" />
      <span className="visually-hidden">Previous</span>
    </button>
    <button
      className="carousel-control-next"
      type="button"
      data-bs-target="#carouselExampleAutoplaying"
      data-bs-slide="next"
    >
      <span className="carousel-control-next-icon" aria-hidden="true" />
      <span className="visually-hidden">Next</span>
    </button>
  </div>
  <div className="servicios">
    <div>
      <img src={require("../images/icons/entrega.png")} alt="" />
      <h4>ENVIO GRATIS</h4>
    </div>
    <div>
      <img src={require("../images/icons/devoluciones.png")} alt="" />
      <h4>DEVOLUCIONES</h4>
    </div>
    <div>
      <img src={require("../images/icons/tarjeta-de-credito.png")} alt="" />
      <h4>PAGO SEGURO</h4>
    </div>
    <div>
      <img src={require("../images/icons/lupa.png")} alt="" />
      <h4>SEGUIMIENTO</h4>
    </div>
  </div>
  <hr />
  <div className="title-inicio">
    <h2>CATEGORIAS</h2>
  </div>
  <hr />
  <div className="categorias">
    <div className="one">
      <Link to="/categorias/1">
        <img src={require("../images/Categorias/Decoracion-del-hogar.webp")}  alt="" />
        <div className="overlay">
          <h3>HOGAR</h3>
        </div>
      </Link>
    </div>
    <div className="two">
      <Link to="/categorias/2">
        <img src={require("../images/Categorias/Moda-sostenible.webp")} alt="" />
        <div className="overlay-two">
          <h3>ROPA</h3>
        </div>
      </Link>
    </div>
    <div className="three">
      <div className="three-one">
        <Link to="/categorias/3">
          <img src={require("../images/Categorias/Joyeria-artesanal.webp")} alt="" />
          <div className="overlay-three">
            <h3>JOYERIA</h3>
          </div>
        </Link>
      </div>
      <div className="three-two">
        <Link to="/categorias/4">
          <img src={require("../images/Categorias/textiles_grande.webp")} alt="" />
          <div className="overlay-three">
            <h3>ACCESORIOS</h3>
          </div>
        </Link>
      </div>
    </div>
  </div>
  <hr className='hr'/>
  <div className="title-inicio">
    <h2>MARCA</h2>
  </div>
  <hr />
  <div className="marca">
    <div className="marca-content">
      <img src={require("../images/Home/logo-Artesanos-400px.png")} alt="" />
      <h3>
        Cada vez que compras una artesanía, estás adquiriendo algo más que un
        simple objeto. Estás adquiriendo una historia, un pedacito de cultura y
        una conexión directa con el corazón creativo de un artista. Estás
        contribuyendo a su sustento y a su sueño de seguir compartiendo su arte
        con el mundo.
      </h3>
    </div>
  </div>
</section>
<Footer />
        </>
    );
}

//4.
export default Inicio; 