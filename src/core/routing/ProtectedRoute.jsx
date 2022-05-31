import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ auth, children}) => {

    const validRoute = () => {                
        if (auth && !localStorage.getItem('token')){
            console.log('Check token in API');
            return <Navigate to="/login" replace={true} />
        }else{
            return children
        }
    }

    return validRoute();
};

export default ProtectedRoute