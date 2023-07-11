import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Breadcrumb from "../components/Breadcrumb";
import axios from "axios";
import "../styles/Tienda.css";


function Tienda() {
  const [productos, setProductos] = useState([]);
  const [categorias, setCategorias] = useState([]);


  useEffect(() => {
    // Obtener productos de la base de datos
    axios
      .get("http://localhost:8081/productos")
      .then((response) => {
        setProductos(response.data);
      })
      .catch((error) => {
        console.error("Error al obtener los productos:", error);
      });

    // Obtener categorías de la base de datos
    axios
      .get("http://localhost:8081/categorias")
      .then((response) => {
        setCategorias(response.data);
      })
      .catch((error) => {
        console.error("Error al obtener las categorías:", error);
      });
  }, []);

  return (
    <>
      <Header />
      <Breadcrumb currentPage="Shop" />

      <div className="container-main">
        <aside className="aside">
          <div className="title">
            <h2>Categorías</h2>
          </div>
          <div className="cat-producto">
            {categorias.map((categoria) => (
              <Link to={'/categorias/' + categoria.id} key={categoria.id}>{categoria.nombre}</Link>
            ))}
          </div>
          {/* Resto del código del aside */}
        </aside>
        <div className="title-aside">
          <h1></h1>
        </div>
        <section className="products">
          <div className="title">
            <h1>Productos</h1>
          </div>
          {productos.map((producto) => {
            return (
              <div className="product" key={producto.id}>
                <a href="">
                  <img className="img" src={require(`../images/Productos/${producto.image}`)} alt="" />
                </a>
                <h3>{producto.nombre}</h3>
                <h4>$ {producto.precio.toFixed(2)}</h4>
                <button className="agregar-al-carrito">
                  Agregar al carrito
                </button>
              </div>
            );
          })}
        </section>
      </div>
      <Footer />
    </>
  );
}

export default Tienda;
