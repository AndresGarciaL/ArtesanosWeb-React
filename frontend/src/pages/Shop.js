import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import "../styles/Tienda.css";

function Shop() {
  return (
    <>
      <Header />
      <nav
        style={{
          background: "lightgray",
          "--bs-breadcrumb-divider":
            "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='10' height='10'%3E%3Cpath d='M2.5 0L1 1.5 3.5 4 1 6.5 2.5 8l4-4-4-4z' fill='%236c757d'/%3E%3C/svg%3E\")",
        }}
        aria-label="breadcrumb"
      >
        <ol className="breadcrumb">
          <li className="breadcrumb-item">
            <a href="/">Home</a>
          </li>
          <li
            className="breadcrumb-item active"
            style={{ fontSize: "medium" }}
            aria-current="page"
          >
            Tienda
          </li>
        </ol>
      </nav>

      <div className="container-main">
        <aside className="aside">
          <div className="title">
            <h2>Categorías</h2>
          </div>
          <div className="cat-producto">
            <a href="#">Joyería</a>
            <a href="#">Ropa</a>
            <a href="#">Accesorios</a>
            <a href="#">Textiles</a>
            <a href="#">Damas</a>
            <a href="#">Caballeros</a>
            <a href="#">Niños</a>
            <a href="#">Decoración</a>
          </div>
          <div className="title">
            <h2>Novedades</h2>
          </div>
          <div className="novedades">
            <img src={require("../images/novedades/vaciabolsillos.webp")} alt="" />
            <a href="">
              <h4>
                La casa de las canastas – Vaciabolsillos original tejido con
                hoja de palma
              </h4>
            </a>
          </div>
          <div className="novedades">
            <img src={require("../images/novedades/embarazada.webp")} alt="" />
            <a href="">
              <h4>Gallery Paper – Muñeca personalizada embarazada</h4>
            </a>
          </div>
        </aside>
        <div className="title-aside">
            <h1></h1>
          </div>
        <section className="products">
          <div className="title">
            <h1>Productos</h1>
          </div>
          <div className="product">
            <a href="">
              <img className="img" src={require("../images/Productos/armadillo.avif")} alt="" />
            </a>
            <h3>ALEBRIJE ARMADILLO</h3>
            <h4>$ 9,865.00</h4>
            <button className="agregar-al-carrito">Agregar al carrito</button>
          </div>
          <div className="product">
            <a href="">
              <img src={require("../images/Productos/cochinito.webp")} alt="" />
            </a>
            <h3>ALCANCÍA COCHINITA MARÍA</h3>
            <h4>$ 233.00</h4>
            <button className="agregar-al-carrito">Agregar al carrito</button>
          </div>
          <div className="product">
            <a href="">
              <img src={require("../images/Productos/blusa.webp")} alt="" />
            </a>
            <h3>BLUSA JALAPA DE DIAS</h3>
            <h4>$ 1,902.00</h4>
            <button className="agregar-al-carrito">Agregar al carrito</button>
          </div>
          <div className="product">
            <a href="">
              <img src={require("../images/Productos/craneo.webp")} alt="" />
            </a>
            <h3>CARTERA CRÁNEO</h3>
            <h4>$ 1,134.00</h4>
            <button className="agregar-al-carrito">Agregar al carrito</button>
          </div>
          <div className="product">
            <a href="">
              <img src={require("../images/Productos/playera.webp")} alt="" />
            </a>
            <h3>PLAYERA GUERRA FLORIDA NEGRA</h3>
            <h4>$ 724.00</h4>
            <button className="agregar-al-carrito">Agregar al carrito</button>
          </div>
          <div className="product">
            <a href="">
              <img src={require("../images/Productos/guayabera.webp")} alt="" />
            </a>
            <h3>GUAYABERA MANGA LARGA</h3>
            <h4>$ 1,525.00</h4>
            <button className="agregar-al-carrito">Agregar al carrito</button>
          </div>
          <div className="product">
            <a href="">
              <img src={require("../images/Productos/pulcera.jpg")} alt="" />
            </a>
            <h3>PULSERA NEGRA AJUSTABLE CON TIGRE DE PLATA</h3>
            <h4>$ 923.00</h4>
            <button className="agregar-al-carrito">Agregar al carrito</button>
          </div>
          <div className="product">
            <a href="">
              <img src={require("../images/Productos/anillo.webp")} alt="" />
            </a>
            <h3>ANILLO DE PLATA 2 HOJAS</h3>
            <h4>$ 610.00</h4>
            <button className="agregar-al-carrito">Agregar al carrito</button>
          </div>
          <div className="product">
            <a href="">
              <img src={require("../images/Productos/estuche.webp")} alt="" />
            </a>
            <h3>ESTUCHE PAPEL PICADO</h3>
            <h4>$ 135.00</h4>
            <button className="agregar-al-carrito">Agregar al carrito</button>
          </div>
          <div className="product">
            <a href="">
              <img src={require("../images/Productos/mousepad.webp")} alt="" />
            </a>
            <h3>MOUSE PAD PIEDRA DEL SOL</h3>
            <h4>$ 263.00</h4>
            <button className="agregar-al-carrito">Agregar al carrito</button>
          </div>
          <div className="product">
            <a href="">
              <img src={require("../images/Productos/aretes.jpg")} alt="" />
            </a>
            <h3>MARETES DE PALMA Y PEWTER AMARILLO CON TURQUESA</h3>
            <h4>$ 196.00</h4>
            <button className="agregar-al-carrito">Agregar al carrito</button>
          </div>
          <div className="product">
            <a href="">
              <img src={require("../images/Productos/guayabera_blanca.webp")} alt="" />
            </a>
            <h3>GUAYABERA MANGA LARGA BLANCA</h3>
            <h4>$ 1,525.00</h4>
            <button className="agregar-al-carrito">Agregar al carrito</button>
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
}

//3.- exportamos
export default Shop;
