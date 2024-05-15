import { useContext } from "react";
import { Navigate } from "react-router-dom";


import { Context } from "../../Components/auth/Context/AuthContext";

export function Protected({children}){

    const{user}=useContext(Context)

    if(!user){
        return  <Navigate to = '/signin' replace />
    } else{
        return children
    }

}