import React, { useContext, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import "./styles/Categorias_Dash.css";
import { useParams } from "react-router-dom";
import SideBar_Dash from "./SideBar_Dash";
import Header_Dash from "./Header_Dash";
import Footer from "../components/Footer";

function Categorias_Dash() {
  const { id } = useParams();
  const [categorias, setCategorias] = useState([]);
  const [editingCategoryId, setEditingCategoryId] = useState(null);
  const [editedCategoryName, setEditedCategoryName] = useState("");

  useEffect(() => {
    axios
      .get("http://localhost:8081/categorias")
      .then((response) => {
        setCategorias(response.data);
      })
      .catch((error) => {
        console.error("Error al obtener las categorías:", error);
      });
  }, [id]);

  const handleDelete = (id) => {
    axios
      .delete(`http://localhost:8081/delcategoria/${id}`)
      .then((response) => {
        setCategorias(categorias.filter((categoria) => categoria.id !== id));
      })
      .catch((error) => {
        console.error("Error al eliminar la categoría:", error);
      });
  };

  const handleEditStart = (id, nombre) => {
    setEditingCategoryId(id);
    setEditedCategoryName(nombre);
  };

  const handleEditCancel = () => {
    setEditingCategoryId(null);
    setEditedCategoryName("");
  };

  const handleEditSave = (id) => {
    axios
      .put(`http://localhost:8081/editcategoria/${id}`, {
        nombre: editedCategoryName,
      })
      .then((response) => {
        const updatedCategories = categorias.map((categoria) => {
          if (categoria.id === id) {
            return { ...categoria, nombre: editedCategoryName };
          }
          return categoria;
        });
        setCategorias(updatedCategories);
        setEditingCategoryId(null);
        setEditedCategoryName("");
      })
      .catch((error) => {
        console.error("Error al modificar el nombre de la categoría:", error);
      });
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
                Categorías
              </h1>
            </div>
            <div className="cat-nombres">
              <table style={{ width: "100%", fontSize: "18px" }}>
                <thead>
                  <tr>
                    <th style={{ textAlign: "center" }}>
                      <h2>ID</h2>
                    </th>
                    <th style={{ textAlign: "center" }}>
                      <h2>Nombre</h2>
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {categorias.map((categoria) => (
                    <tr key={categoria.id}>
                      <td style={{ textAlign: "center" }}>
                        <h4>{categoria.id}</h4>
                      </td>
                      <td style={{ textAlign: "center" }}>
                        {editingCategoryId === categoria.id ? (
                          <input
                            type="text"
                            value={editedCategoryName}
                            onChange={(e) =>
                              setEditedCategoryName(e.target.value)
                            }
                            onKeyDown={(e) => {
                              if (e.key === "Enter") {
                                handleEditSave(categoria.id);
                              } else if (e.key === "Escape") {
                                handleEditCancel();
                              }
                            }}
                            onBlur={() => handleEditSave(categoria.id)}
                            autoFocus
                          />
                        ) : (
                          <h4>{categoria.nombre}</h4>
                        )}
                      </td>
                      <td>
                        <img
                          className="img-edit"
                          src={require(`./icons/editar.png`)}
                          alt=""
                          onClick={() =>
                            handleEditStart(categoria.id, categoria.nombre)
                          }
                        />
                      </td>
                      <td>
                        <img
                          className="img-del"
                          src={require(`./icons/eliminar.png`)}
                          alt=""
                          onClick={() => handleDelete(categoria.id)}
                        />
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
              <Link to="/Dashboard/AgregarCategoria">
                <button
                  style={{
                    display: "block",
                    margin: "20px auto",
                    fontSize: "18px",
                  }}
                >
                  Agregar
                </button>
              </Link>
            </div>
          </section>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Categorias_Dash;
