import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { CarritoProvider } from "./pages/CarritoContext";
import Inicio from "./pages/Inicio";
import Login from "./pages/Login";
import Register from "./pages/Register";
import "bootstrap/dist/css/bootstrap.min.css";
import Artesanos from "./pages/Artesanos";
import Conocenos from "./pages/Conocenos";
import Contacto from "./pages/Contacto";
import Shop from "./pages/Shop";
import Tienda from "./pages/Tienda";
import Categorias from "./pages/Categorias";
import Carrito from "./pages/Carrito";

function App() {
  return (
    <CarritoProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Inicio />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/Register" element={<Register />} />
          <Route path="/Artesanos" element={<Artesanos />} />
          <Route path="/Conocenos" element={<Conocenos />} />
          <Route path="/Contacto" element={<Contacto />} />
          <Route path="/Shop" element={<Shop />} />
          <Route path="/Tienda" element={<Tienda />} />
          <Route path="/categorias/:id" element={<Categorias />} />
          <Route path="/Carrito" element={<Carrito />} />
        </Routes>
      </Router>
    </CarritoProvider>
  );
}

export default App;

