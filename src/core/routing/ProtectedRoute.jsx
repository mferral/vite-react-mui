import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ auth, children}) => {
    const isValidate = () => {        
        const token = localStorage.getItem('token')  
        if (token){
            const data = atob(token.split('.')[1])
            const exp = JSON.parse(data).exp
            if (exp < Date.now() / 1000) {
                console.log('expirto');
                localStorage.removeItem('token')                    
            }
        }
        if(auth && !token)
            return false  
        else
            return true       
    }
    const validRoute = () => {     
        if (isValidate()){       
            return children
        }else{
            return <Navigate to="/login" replace={true} />            
        }
    }

    return validRoute();
};

export default ProtectedRoute