import { createContext, useState } from "react"
import { verifyService } from "../services/auth.services";

const AuthContext = createContext()


function AuthWrapper (props) {

    // Estados y funciones globales~
    const { isLoggedIn, setIsLoggedIn} = useState(false);
    const { user, setUser } = useState(null)

    const authenticateUser = async () =>{
        // Valida el token y actualiza los estados

        try {

          const response=  await verifyService()
            
        } catch (error) {
            
        }
    }


   const passedContext = {
    isLoggedIn,
    user,
    authenticateUser

   }

   return(
    <AuthContext.Provider value={passedContext}>
        {props.children}

    </AuthContext.Provider>
   )

}

export {
    AuthContext,
    AuthWrapper
}