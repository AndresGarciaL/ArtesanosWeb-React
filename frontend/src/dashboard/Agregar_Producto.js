import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./styles/Categorias_Dash.css";
import SideBar_Dash from "./SideBar_Dash";
import Header_Dash from "./Header_Dash";
import Footer from "../components/Footer";
import swal from "sweetalert";

function Agregar_Producto() {
  const mostrarAlerta = () => {
    swal({
      title: "Producto Agregado con Éxito",
      text: "¡Vaya a la pagina de productos para ver los cambios!",
      icon: "success",
      button: "Aceptar",
      timer: 5000,
    });
  };

  const [categoria, setCategoria] = useState("");
  const [categorias, setCategorias] = useState([]);
  const [nombre, setNombre] = useState("");
  const [descripcion, setDescripcion] = useState("");
  const [precio, setPrecio] = useState("");
  const [stock, setStock] = useState("");
  const [image, setImage] = useState("");
  const navegacion = useNavigate();

  useEffect(() => {
    // Obtener las categorías de la base de datos al cargar el componente
    axios
      .get("http://localhost:8081/categorias")
      .then((response) => {
        setCategorias(response.data);
      })
      .catch((error) => {
        console.error("Error al obtener las categorías:", error);
      });
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:8081/addproducto", {
        nombre,
        descripcion,
        precio,
        stock,
        categoria,
        image,
      })
      .then((response) => {
        console.log("Producto agregado correctamente");
        navegacion.push("/Dashboard/Categorias"); // Redirigir
        limpiarFormulario(); // Restablecer los valores del formulario
      })
      .catch((error) => {
        console.error("Error al agregar el producto:", error);
      });
  };

  const handleChange = (e) => {
    if (e.target.name === "nombre") {
      setNombre(e.target.value);
    } else if (e.target.name === "descripcion") {
      setDescripcion(e.target.value);
    } else if (e.target.name === "precio") {
      setPrecio(e.target.value);
    } else if (e.target.name === "stock") {
      setStock(e.target.value);
    } else if (e.target.name === "categoria") {
      setCategoria(e.target.value);
    } else if (e.target.name === "image") {
      setImage(e.target.value);
    }
  };

  const limpiarFormulario = () => {
    setNombre("");
    setDescripcion("");
    setPrecio("");
    setStock("");
    setCategoria("");
    setImage("");
  };

  return (
    <>
      <Header_Dash />
      <div className="dashboard-container">
        <SideBar_Dash />
        <div className="container-cat">
          <div className="separator">
            <h1></h1>
          </div>
          <section className="dash-cat">
            <div className="title-cat-dash">
              <h1 style={{ fontSize: "24px", textAlign: "center" }}>
                Agregar Producto
              </h1>
            </div>
            <div className="cat-nombres">
              <form onSubmit={handleSubmit}>
                <input
                  type="text"
                  name="nombre"
                  placeholder="Nombre del Producto"
                  value={nombre}
                  onChange={handleChange}
                />
                <input
                  type="text"
                  name="descripcion"
                  placeholder="Descripcion Producto"
                  value={descripcion}
                  onChange={handleChange}
                />
                <input
                  type="text"
                  name="precio"
                  placeholder="Precio Producto"
                  value={precio}
                  onChange={handleChange}
                />
                <input
                  type="text"
                  name="stock"
                  placeholder="Stock producto"
                  value={stock}
                  onChange={handleChange}
                />
                <select
                  name="categoria"
                  id="categoria"
                  onChange={handleChange}
                  required
                >
                  <option value="">Seleccione una categoría</option>
                  {categorias.map((cat) => (
                    <option key={cat.id} value={cat.id}>
                      {cat.nombre}
                    </option>
                  ))}
                </select>
                <input
                  type="text"
                  name="image"
                  placeholder="nombre de imagen.extension"
                  value={image}
                  onChange={handleChange}
                />
                <button
                  type="submit"
                  style={{
                    display: "block",
                    margin: "20px auto",
                    fontSize: "18px",
                  }}
                  onClick={() => mostrarAlerta()}
                >
                  Agregar
                </button>
              </form>
            </div>
          </section>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Agregar_Producto;
