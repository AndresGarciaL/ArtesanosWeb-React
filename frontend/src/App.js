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
import Dashboard from "./dashboard/Dashboard";
import Categorias_Dash from "./dashboard/Categorias_Dash";
import Agregar_Categoria from "./dashboard/Agregar_Categoria";
import Productos_Dash from "./dashboard/Productos_Dash";
<<<<<<< HEAD
import PrivateRoute from "./components/PrivateRoute";
=======
import Agregar_Producto from "./dashboard/Agregar_Producto";
>>>>>>> 0016e45cb4ea7ad736a092e51e03d1102d4a1fb0

function App() {
  return (
    <CarritoProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Inicio />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/Register" element={<Register />} />
          <Route path="/Dashboard" element={<Dashboard />} />
          <Route path="/Artesanos" element={<Artesanos />} />
          <Route path="/Conocenos" element={<Conocenos />} />
          <Route path="/Contacto" element={<Contacto />} />
          <Route path="/Shop" element={<Shop />} />
          <Route path="/Tienda" element={<Tienda />} />
          <Route path="/categorias/:id" element={<Categorias />} />
          <Route path="/Carrito" element={<Carrito />} />
          <Route path="/Dashboard/Categorias" element={<Categorias_Dash />} />
          <Route path="/Dashboard/AgregarCategoria" element={<Agregar_Categoria />} />
          <Route path="/Dashboard/Productos" element={<Productos_Dash />} />
          <Route path="/Dashboard/AgregarProducto" element={<Agregar_Producto />} />

        </Routes>
      </Router>
    </CarritoProvider>
  );
}

export default App;

