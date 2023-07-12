// Producto.js
import React from "react";

function Producto({ producto, agregarAlCarrito }) {
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
        onClick={() => agregarAlCarrito(producto)}
      >
        Agregar al carrito
      </button>
    </div>
  );
}

export default Producto;
