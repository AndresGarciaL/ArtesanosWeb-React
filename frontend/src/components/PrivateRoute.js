import React, { useContext } from "react";
import { Outlet, Navigate } from "react-router-dom";
import { UserContext } from "./UserContext"; // Cambiamos AuthContext a UserContext

const PrivateRoute = ({ roles }) => {
  const { usuario } = useContext(UserContext); // Cambiamos AuthContext a UserContext
  if (!usuario) {
    return <Navigate to="/" />;
  }

  if (!roles.includes(usuario.rol_id)) {
    return <Navigate to="/" />;
  }

  return <Outlet />;
};

export default PrivateRoute;
