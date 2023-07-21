import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./styles/Categorias_Dash.css";
import SideBar_Dash from "./SideBar_Dash";
import Header_Dash from "./Header_Dash";
import Footer from "../components/Footer";
import swal from "sweetalert";

function Agregar_Usuario() {
  const mostrarAlerta = () => {
    swal({
      title: "Usuario Agregado con Éxito",
      text: "¡Vaya a la página de usuarios para ver los cambios!",
      icon: "success",
      button: "Aceptar",
      timer: 5000,
    });
  };

  const [nombre, setNombre] = useState("");
  const [apellidos, setApellidos] = useState("");
  const [email, setEmail] = useState("");
  const [contrasena, setContrasena] = useState("");
  const [direccion, setDireccion] = useState("");
  const [rolId, setRolId] = useState("");
  const [estatus, setEstatus] = useState("");
  const [roles, setRoles] = useState([]);
  const navegacion = useNavigate();

  useEffect(() => {
    // Obtener las categorías de la base de datos al cargar el componente
    axios
      .get("http://localhost:8081/roles")
      .then((response) => {
        setRoles(response.data);
      })
      .catch((error) => {
        console.error("Error al obtener los roles:", error);
      });
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:8081/addusuarios", {
        nombre,
        apellidos,
        email,
        contrasena,
        direccion,
        rol_id: rolId, // Assign the selected role ID to the user
        estatus,
      })
      .then((response) => {
        console.log("Usuario agregado correctamente");
        navegacion("/Dashboard/Usuarios"); // Redirigir
        limpiarFormulario(); // Restablecer los valores del formulario
        mostrarAlerta();
      })
      .catch((error) => {
        console.error("Error al agregar el usuario:", error);
      });
  };

  const handleChange = (e) => {
    if (e.target.name === "nombre") {
      setNombre(e.target.value);
    } else if (e.target.name === "apellidos") {
      setApellidos(e.target.value);
    } else if (e.target.name === "email") {
      setEmail(e.target.value);
    } else if (e.target.name === "contrasena") {
      setContrasena(e.target.value);
    } else if (e.target.name === "direccion") {
      setDireccion(e.target.value);
    } else if (e.target.name === "rolId") {
      setRolId(e.target.value);
    } else if (e.target.name === "estatus") {
      setEstatus(e.target.value);
    }
  };

  const limpiarFormulario = () => {
    setNombre("");
    setApellidos("");
    setEmail("");
    setContrasena("");
    setDireccion("");
    setRolId("");
    setEstatus("");
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
                Agregar Usuario
              </h1>
            </div>
            <div className="cat-nombres">
              <form onSubmit={handleSubmit}>
                <input
                  type="text"
                  name="nombre"
                  placeholder="Nombre del Usuario"
                  value={nombre}
                  onChange={handleChange}
                />
                <input
                  type="text"
                  name="apellidos"
                  placeholder="Apellidos del Usuario"
                  value={apellidos}
                  onChange={handleChange}
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Correo Electrónico"
                  value={email}
                  onChange={handleChange}
                />
                <input
                  type="password"
                  name="contrasena"
                  placeholder="Contraseña"
                  value={contrasena}
                  onChange={handleChange}
                />
                <input
                  type="text"
                  name="direccion"
                  placeholder="Dirección del Usuario"
                  value={direccion}
                  onChange={handleChange}
                />
                <select
                  name="rolId"
                  id="rolId"
                  onChange={handleChange}
                  required
                >
                  <option value="">Seleccione un rol</option>
                  {roles.map((rol) => (
                    <option key={rol.id} value={rol.id}>
                      {rol.nombre}
                    </option>
                  ))}
                </select>
                <input
                  type="text"
                  name="estatus"
                  placeholder="Estatus del Usuario"
                  value={estatus}
                  onChange={handleChange}
                />
                <button
                  type="submit"
                  style={{
                    display: "block",
                    margin: "20px auto",
                    fontSize: "18px",
                  }}
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

export default Agregar_Usuario;
