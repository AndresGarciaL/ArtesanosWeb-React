//1.
import React from 'react';
import Header from "../components/Header";
import Footer from "../components/Footer";
import "../styles/Inicio.css";
import { Link } from "react-router-dom";

//2.
function Dashboard() {
  //3.
  return (
    <>
      <Header />
      <h1>Dashboard</h1>
      <Footer />
    </>
  );
}

//4.
export default Dashboard; 