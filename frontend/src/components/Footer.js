//1. Importar React
import React from 'react';

//Agregar los enlaces
import { Link } from 'react-router-dom';

//Importar Encabezado.css
import '../styles/Footer.css';

//2. Crear la funcion
function Footer() {
    //3. Metodo return HTML
    return (
        <>
            <footer>
                <p>Todos los derechos reservados &copy; | SM-33 | Andrés Garcia Leyva | Gael Aldair Marquez Peralta</p>
            </footer>
        </>
    );
}

//4. Exportamos
export default Footer;      //PRIMER COMPONENTE