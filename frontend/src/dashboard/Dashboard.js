import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Header_Dash from "./Header_Dash";
import Footer from "../components/Footer";
import axios from "axios";
import "./styles/Dashboard.css";
import Categorias_Dash from "./Categorias_Dash";
import SideBar_Dash from "./SideBar_Dash";

function Dashboard() {

  return (
    <>
      <Header_Dash />
      <div className="dashboard-container">
        <SideBar_Dash />
        <div className="title-dashboard">
        <h1>BIENVENIDO AL DASHBOARD</h1>
        <h2>Datos del usuario admin</h2>
        </div>
        
        
       </div>
      <Footer />
    </>
  );
}

export default Dashboard;
