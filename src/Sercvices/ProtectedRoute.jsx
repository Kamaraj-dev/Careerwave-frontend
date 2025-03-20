import { jwtDecode } from "jwt-decode";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children, allowedRoles }) => {
    const token = useSelector((state) => state.jwt);
    try {
      const decoded = jwtDecode(token);
      if (allowedRoles && !allowedRoles.includes(decoded.accountType)) {
        return <Navigate to="/" />;
      }
  
      return children;
    } catch (error) {
      console.error("Invalid token:", error);
      return <Navigate to="/login" />;
    }
  };
  
  export default ProtectedRoute;