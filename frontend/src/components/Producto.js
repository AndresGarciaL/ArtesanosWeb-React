// Producto.js
import React from "react";
import swal from "sweetalert";

function Producto({ producto, agregarAlCarrito }) {
  const mostrarAlerta = () => {
    swal({
      title: "Producto Agregado al Carrito con Éxito",
      text: "¡Vaya al carrito para ver sus productos!",
      icon: "success",
      button: "Aceptar",
      timer: 5000,
    });
  };

  return (
    <div className="product" key={producto.id}>
      <a href="">
        <img
          className="img"
          src={require(`../images/Productos/${producto.image}`)}
          alt=""
        />
      </a>
      <h3>{producto.nombre}</h3>
      <h4>$ {producto.precio.toFixed(2)}</h4>
      <button
        className="agregar-al-carrito"
        onClick={() => {
          mostrarAlerta();
          agregarAlCarrito(producto);
        }}
      >
        Agregar al carrito
      </button>
    </div>
  );
}

export default Producto;
