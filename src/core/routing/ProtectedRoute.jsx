import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ auth, children}) => {

    const validRoute = () => {
        console.log('Check token in API');                        
        return auth ?  <Navigate to="/login" replace={true} /> : children
    }

    return validRoute();
};

export default ProtectedRoute