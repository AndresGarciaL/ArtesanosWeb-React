import React, { useContext, useEffect,useState } from "react";
import { Link } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Breadcrumb from "../components/Breadcrumb";
import axios from "axios";
import Producto from "../components/Producto";
import { CarritoContext } from "./CarritoContext";
import "../styles/Tienda.css";

function Tienda() {
  const { productos, agregarAlCarrito } = useContext(CarritoContext);
  const [categorias, setCategorias] = useState([]);
  const [carrito, setCarrito] = useState([]);

  useEffect(() => {
    // Obtener categorías de la base de datos
    axios
      .get("http://localhost:8081/categorias")
      .then((response) => {
        setCategorias(response.data);
      })
      .catch((error) => {
        console.error("Error al obtener las categorías:", error);
      });

    // Obtener carrito del almacenamiento local
    const carritoGuardado = localStorage.getItem("carrito");
    if (carritoGuardado) {
      setCarrito(JSON.parse(carritoGuardado));
    }
  }, []);

  useEffect(() => {
    // Guardar carrito en el almacenamiento local
    localStorage.setItem("carrito", JSON.stringify(carrito));
  }, [carrito]);

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

          {/* Resto del código del aside */}
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

export default Tienda;
