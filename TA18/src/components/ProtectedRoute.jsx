/* eslint-disable react/prop-types */
import { Navigate } from 'react-router-dom';

// Recibe el componente y el estado de autenticación
const ProtectedRoute = ({ isAuthenticated, children }) => {
  // Si el usuario no está autenticado, redirige al Home
  if (!isAuthenticated) {
    return <Navigate to="/" />;
  }

  // Si está autenticado, renderiza el componente solicitado
  return children;
};

export default ProtectedRoute;
