import React ,{useState,useContext,useEffect} from "react";
import { auth } from "../components/screens/firebase";


const AuthContext = React.createContext()
export function useAuth () {
    return(useContext(AuthContext))
}

const AuthProvider=({children})=>{

const signup=(email,password)=>(
     auth.createUserWithEmailAndPassword(email,password)
)

const value ={
    signup,
}

return(
    <AuthContext.Provider value={value}>

    </AuthContext.Provider>
)
}
export default AuthProvider