import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Breadcrumb from "../components/Breadcrumb";
import { CarritoContext } from "./CarritoContext";
import "../styles/Carrito.css";
import Producto from "../components/Producto";
import Compra from "./Compra";

import Swal from "sweetalert2";
import axios from "axios";
import withReactContent from "sweetalert2-react-content";

function Carrito() {
  const { productos, agregarAlCarrito } = useContext(CarritoContext);
  const { carrito, eliminarTotalDelCarrito } = useContext(CarritoContext);
  const { carrito2, eliminarDelCarrito } = useContext(CarritoContext);

  useEffect(() => {
    // Guardar carrito en el almacenamiento local
    localStorage.setItem("carrito", JSON.stringify(carrito));
  }, [carrito]);

  // Calcular el precio total del carrito
  const calcularPrecioTotal = () => {
    let total = 0;
    carrito.forEach((item) => {
      total += item.precio * item.cantidad;
    });
    return total.toFixed(2);
  };

  //Paypal
  const [paymentUrl, setPaymentUrl] = useState("");
  const generarPago = async () => {
    try {
      const { data } = await axios.post("http://localhost:8081/crearPago", {
        total: calcularPrecioTotal(),
      });
      setPaymentUrl(data.url);
    } catch (error) {
      console.error("Error al generar el pago:", error);
      // Mostrar alguna alerta o mensaje de error si es necesario
    }
  };

  useEffect(() => {
    if (paymentUrl) {
      // Redireccionar a la página de PayPal
      window.location.href = paymentUrl;
    }
  }, [paymentUrl]);

  // Verificar estado del pago después de regresar de PayPal
  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const paymentStatus = urlParams.get("status");

    if (paymentStatus) {
      const MySwal = withReactContent(Swal);

      if (paymentStatus === "success") {
        MySwal.fire({
          icon: "success",
          title: "Pago exitoso",
          text: "Gracias por tu compra",
        });
      } else if (paymentStatus === "cancel") {
        MySwal.fire({
          icon: "error",
          title: "Pago cancelado",
          text: "El pago ha sido cancelado",
        });
      }
    }
  }, [paymentUrl]);


  return (
    <>
      <Header />
      <Breadcrumb currentPage="Carrito" />

      <section className="section-carrito">
        <div className="detalle-carrito">
          <div className="titulo-resumen-carrito">
            <h3>Resumen de compra</h3>
          </div>
          <div className="resumen-carrito">
            {carrito.map((item) => (
              <div key={item.id} className="item-resumen">
                <span className="item-title">🟢 {item.nombre}</span>
                <span className="item">Cantidad: {item.cantidad}</span>
                <span className="item">Precio por unidad: ${item.precio.toFixed(2)}</span>
                <span className="item">Subtotal: ${(item.precio * item.cantidad).toFixed(2)}</span>
              </div>
            ))}
            <div className="total-carrito">
              <span className="item-title-total">Total: </span>
              <span className="item-title-total">${calcularPrecioTotal()}</span>
            </div>
            <button className="button-compra" onClick={generarPago}>
              Continuar compra
            </button>
          </div>
        </div>

        <div className="container-carrito">
          {carrito.map((item) => (
            <div className="products-cart" key={item.id}>
              <div className="product-cart">
                <a href="">
                  <img
                    className="img"
                    src={require(`../images/Productos/${item.image}`)}
                    alt=""
                  />
                </a>
              </div>
              <div className="prodc-nombre-carrito">
                <h5>{item.nombre}</h5>
                <div className="botones-carrito">
                  <div className="btn-carrito">
                    <div className="btn-eliminar">
                      <button onClick={() => eliminarTotalDelCarrito(item)}>
                        Eliminar
                      </button>
                    </div>
                    <div className="btn--carrito">
                      <a href="#">Comprar ahora</a>
                    </div>
                    <div className="btn--carrito">
                      <a href="#">Guardar</a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="product-cart">
                <div className="quantity-selector">
                  <button
                    className="quantity-btn minus"
                    onClick={() =>
                      eliminarDelCarrito({
                        ...item,
                        cantidad: item.cantidad - 1,
                      })
                    }
                  >
                    -
                  </button>
                  <input
                    type="number"
                    min={1}
                    value={item.cantidad}
                    readOnly
                    className="quantity-input"
                  />
                  <button
                    className="quantity-btn plus"
                    onClick={() =>
                      agregarAlCarrito({
                        ...item,
                        cantidad: item.cantidad + 1,
                      })
                    }
                  >
                    +
                  </button>
                </div>
              </div>
              <div className="prodc-precio-carrito">
                <h4>$ {(item.precio * item.cantidad).toFixed(2)}</h4>
              </div>
            </div>
          ))}
        </div>
      </section>

      <div>
        <div className="products">
          <div className="title-carrito">
            <h1>Recomendaciones para ti</h1>
          </div>

          {productos.map((producto) => (
            <Producto
              key={producto.id}
              producto={producto}
              agregarAlCarrito={agregarAlCarrito}
            />
          ))}
        </div>
      </div>

      <Footer />
    </>
  );
}

export default Carrito;