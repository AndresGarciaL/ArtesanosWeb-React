import React, { useContext, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import "../styles/Tienda.css";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Producto from "../components/Producto";
import Breadcrumb from "../components/Breadcrumb";
import { CarritoContext } from "./CarritoContext";
import { useParams } from 'react-router-dom';

function Categorias() {
  const { id } = useParams();
  const { agregarAlCarrito } = useContext(CarritoContext);
  const [categorias, setCategorias] = useState([]);
  const [productos, setProductos] = useState([]);

  useEffect(() => {
    axios
      .get(`http://localhost:8081/categorias/${id}`)
      .then((response) => {
        setProductos(response.data);
      })
      .catch((error) => {
        console.error("Error al obtener los productos:", error);
      });

    axios
      .get("http://localhost:8081/categorias")
      .then((response) => {
        setCategorias(response.data);
      })
      .catch((error) => {
        console.error("Error al obtener las categorías:", error);
      });
  }, [id]);

  return (
    <>
      <Header />
      <Breadcrumb currentPage="Shop" />

      <div className="container-main">
        <aside className="aside">
          <div className="title-aside">
            <h2>Categorías</h2>
          </div>
          <div className="cat-producto">
            {categorias.map((categoria) => (
              <Link to={"/categorias/" + categoria.id} key={categoria.id}>
                {categoria.nombre}
              </Link>
            ))}
          </div>
        </aside>
        <div className="separator">
          <h1></h1>
        </div>
        <section className="products">
          <div className="title-tienda">
            <h1>Productos</h1>
          </div>
          {productos.map((producto) => (
            <Producto
              key={producto.id}
              producto={producto}
              agregarAlCarrito={agregarAlCarrito}
            />
          ))}
        </section>
      </div>
      <Footer />
    </>
  );
}

export default Categorias;

