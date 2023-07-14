import axios from "axios";
import "./styles/Productos_Dash.css";
import SideBar_Dash from "./SideBar_Dash";
import Header_Dash from "./Header_Dash";
import Footer from "../components/Footer";
import React, { useState,useEffect} from "react";

function Productos_Dash() {
    const [productos, setProductos] = useState([]);
  
  
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
    }, []);  

  return (
    <>
      <Header_Dash />
      <div className="dashboard-container">
        <SideBar_Dash />
        <div className="separator">
            <h1></h1>
          </div>
        <section className="products-dash">
          <div className="title-produc-dash">
            <h1>Productos</h1>
          </div>
          {productos.map((producto) => {
            return (
              <div className="product-dash" key={producto.id}>
                <div className="img-prod-dash">
                <a href="">
                  <img  src={require(`../images/Productos/${producto.image}`)} alt="" />
                </a>
                </div>
              
                <h3>{producto.nombre}</h3>
                <h4>$ {producto.precio.toFixed(2)}</h4>
               <div className="icons-actions">
               <img
                          className="img-edit2"
                          src={require(`./icons/editar.png`)}
                          alt=""
                         
                        />
                        <p></p>
               <img
                          className="img-del2"
                          src={require(`./icons/eliminar.png`)}
                          alt=""
                         
                        />
               </div>
              </div>
            );
          })}
        </section>        
      </div>
      <Footer />
    </>
  );
}

export default Productos_Dash;
