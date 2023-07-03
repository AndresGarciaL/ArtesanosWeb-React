import logo from './logo.svg';
import './App.css';
import Inicio from './pages/Inicio'
import Login from './pages/Login'
import Register from './pages/Register'
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Artesanos from './pages/Artesanos';
import Conocenos from './pages/Conocenos';
import Contacto from './pages/Contacto';

function App() {
  return (
   <>
     <BrowserRouter>
      <Routes>
        <Route path="/" element={<Inicio />}></Route>
        <Route path="/Login" element={<Login />}></Route>
        <Route path="/Register" element={<Register />}></Route>
        <Route path="/Artesanos" element={<Artesanos />}></Route>
        <Route path="/Conocenos" element={<Conocenos />}></Route>
        <Route path="/Contacto" element={<Contacto />}></Route>
      </Routes>
    </BrowserRouter>
   </>
  );
}

export default App;
