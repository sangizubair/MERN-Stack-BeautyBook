import { useContext } from "react";
import { authContext } from '../context/AuthContext';
import { Navigate } from "react-router-dom"; 

const ProtectedRoute = ({ children, allowedRoles }) => { 
    const { token, user, salon  } = useContext(authContext);
    console.log("Salon object:", salon);
   
const isAllowed = (user && allowedRoles.includes(user.role)) || (salon && allowedRoles.includes(salon.role));
    const accessibleRoute = token && isAllowed ? children : <Navigate to='/login' replace={true} />;
    return accessibleRoute;
}


export default ProtectedRoute;
