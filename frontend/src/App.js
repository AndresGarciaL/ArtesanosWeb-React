import logo from './logo.svg';
import './App.css';
import Inicio from './pages/Inicio'
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
   <>
     <BrowserRouter>
      <Routes>
        <Route path="/" element={<Inicio />}></Route>
      </Routes>
    </BrowserRouter>
   </>
  );
}

export default App;
