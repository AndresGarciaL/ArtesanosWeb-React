import React, { useEffect, useState } from "react";
import Header_Dash from "./Header_Dash";
import Footer from "../components/Footer";
import "./styles/Dashboard.css";
import SideBar_Dash from "./SideBar_Dash";
import axios from 'axios';

function Dashboard() {
  const [userData, setUserData] = useState(null);

  // Función para obtener los datos del usuario actual al montar el componente
  const fetchUserData = async () => {
    try {
      const response = await axios.get("http://localhost:8081/UsuarioActual", {
        headers: {
          Authorization: localStorage.getItem("token")
        }
      });
      if (response.data.Estatus === "CORRECTO") {
        setUserData(response.data.Resultado);
      }
    } catch (error) {
      console.log("Se produjo un error al obtener la información del usuario actual: ", error);
    }
  };

  useEffect(() => {
    // Llamada a la función para obtener los datos del usuario al montar el componente
    fetchUserData();
  }, []);

  return (
    <>
      <Header_Dash />
      <div className="dashboard-container">
        <SideBar_Dash />
        <div className="title-dashboard">
          <h1>BIENVENIDO AL DASHBOARD</h1>
          {userData && (
            <div style={{ border: "2px solid #007BFF", borderRadius: "8px", padding: "16px", backgroundColor: "#F7F7F7", boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)" }}>
              <div className="tarjeta-user"> 
              <img src={require(`./icons/usuario.png`)}/>
              <h2 style={{ color: "#007BFF", fontSize: "24px", margin: "0" }}>{userData.nombre} {userData.apellidos}</h2>
              </div>
        
              <hr style={{ border: "1px solid #007BFF", margin: "8px 0" }} />
              <h2 style={{ color: "#333", fontSize: "20px", margin: "0" }}>Datos del usuario:</h2>
              <h4 style={{ color: "#333", fontSize: "16px", margin: "0" }}>Email: {userData.email}</h4>
            </div>
          )}
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Dashboard;
