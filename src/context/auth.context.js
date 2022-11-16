import { createContext, useState, useEffect } from "react"
import { verifyService } from "../services/auth.services";
import CircleLoader from "react-spinners/CircleLoader";

const AuthContext = createContext()


function AuthWrapper (props) {

    // Estados y funciones globales~
    const  [isLoggedIn, setIsLoggedIn] = useState(false);
    const [ user, setUser ] = useState(null)
    const [ isFeching, setIsFeching] = useState(true)

    //Mantiene al cliente logado aunque haga refresh

    useEffect(() =>{
        authenticateUser()

    }, [])

    const authenticateUser = async () =>{
        // Valida el token y actualiza los estados

        setIsFeching(true) // Cambia true miestras se valida el token

        try {

          const response=  await verifyService()

          //token validado
          setIsLoggedIn(true)
          setUser(response.data)
          setIsFeching(false)
            
        } catch (error) {
            setIsLoggedIn(false)
            setUser(null)
            setIsFeching(false)
            
        }
    }


   const passedContext = {
    isLoggedIn,
    user,
    authenticateUser,
    setIsLoggedIn,
    setUser

   }

   if(isFeching === true){
    return(
        <div className="App">

            <CircleLoader/>



    </div>

    )
    
    
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