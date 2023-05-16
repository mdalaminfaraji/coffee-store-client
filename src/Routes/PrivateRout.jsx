import React, { useContext } from 'react';
import { AuthContext } from '../AuthProviders/AuthProviders';
import { Navigate, useLocation, useNavigate } from 'react-router-dom';

const PrivateRout = ({children}) => {
    const {user,loading}=useContext(AuthContext);
    const location=useLocation();
    if(loading){
        return (<>
        <progress className="progress w-full h-72"></progress>
        </>);
    }
  
    if(!user){
         return <Navigate to="/login" state={{ from: location }} replace />;
    }
    return children;
   
};

export default PrivateRout;