import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import jwt_decode from 'jwt-decode';

const PrivateRoute = ({ element: Component, allowedRole }) => {
  // Obtener el token del localStorage
  const usuarioToken = localStorage.getItem('usuario');

  // Verificar si el token es una cadena antes de decodificarlo
  if (typeof usuarioToken === "string") {
    // Decodificar el token para obtener el rol_id (asumiendo que es el nombre de la propiedad en el token)
    const decodedToken = jwt_decode(usuarioToken); // Asegúrate de que tengas el paquete 'jwt-decode' instalado

    // Obtener el rol_id del token decodificado
    const rol_id = decodedToken.usuario;
    console.log(rol_id);

    if (rol_id === allowedRole) {
      // Devolver el componente original
      return <Component />;
    } else {
      // Redirige al usuario a la página de inicio de sesión u otra página de error según tus necesidades
      return <Navigate to="/Login" />;
    }
  } else {
    // Si el token no es una cadena válida, redirige al usuario a la página de inicio de sesión
    return <Outlet/>;
  }
};

export default PrivateRoute;
