import React, { createContext, useState, useEffect } from "react";
import axios from "axios";
import "../styles/Carrito.css";

export const CarritoContext = createContext();

export const CarritoProvider = ({ children }) => {
  const [productos, setProductos] = useState([]);
  const [carrito, setCarrito] = useState([]);

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

  const agregarAlCarrito = (producto) => {
    const productoEnCarrito = carrito.find((item) => item.id === producto.id);
    if (productoEnCarrito) {
      const nuevoCarrito = carrito.map((item) =>
        item.id === producto.id
          ? { ...item, cantidad: item.cantidad + 1 }
          : item
      );
      setCarrito(nuevoCarrito);
    } else {
      setCarrito([...carrito, { ...producto, cantidad: 1 }]);
    }
  };

  const eliminarDelCarrito = (producto) => {
    const productoEnCarrito = carrito.find((item) => item.id === producto.id);
    if (productoEnCarrito) {
      // Verificar si la cantidad actual es mayor a 1 antes de restar
      if (productoEnCarrito.cantidad > 1) {
        const nuevoCarrito = carrito.map((item) =>
          item.id === producto.id
            ? { ...item, cantidad: item.cantidad - 1 }
            : item
        );
        setCarrito(nuevoCarrito);
      } else {
        // Eliminar el producto del carrito si la cantidad es 1
        const nuevoCarrito = carrito.filter((item) => item.id !== producto.id);
        setCarrito(nuevoCarrito);
      }
    } else {
      setCarrito([...carrito, { ...producto, cantidad: 1 }]);
    }
  };







  const eliminarTotalDelCarrito = (producto) => {
    const nuevoCarrito = carrito.filter((item) => item.id !== producto.id);
    setCarrito(nuevoCarrito);
  };


  return (
    <CarritoContext.Provider
      value={{ productos, carrito, agregarAlCarrito, eliminarTotalDelCarrito, eliminarDelCarrito }}
    >
      {children}
    </CarritoContext.Provider>
  );
};
