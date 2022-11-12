import { useState } from "react"
import { loginService } from "../services/auth.services"
import { useNavigate } from "react-router-dom"
import { useContext } from "react"
import { AuthContext } from "../context/auth.context"

function Login() {

  const { authenticateUser } = useContext(AuthContext)

  const navigate = useNavigate()

    
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [errorMessage, setErrorMessage] = useState("")

    const handleEmailChange = (e) => setEmail(e.target.value);
    const handlePasswordChange = (e) => setPassword(e.target.value);

    const handleLogin = async (e) => {
       e.preventDefault()
       // Logica


       
       // Recopilar info del user

       const credentialsUser = {
        email: email,
        password: password
       }

       try {

        // Contactar con el BE
        const response = await loginService(credentialsUser)

       // Recibir el token

       // local storage para almacenar info.
       localStorage.setItem("token", response.data.authToken)


       //Valida el token del user
       authenticateUser()


       //Guardar info del que el usuario esta logado
        
       } catch (error) {
        if(error.response && error.response.status === 400 ) {
          setErrorMessage(error.response.data.errorMessage)


      }else{
        navigate("/error")

        }
        
       }

       

       

    }
  
    return (
        <div>
    
          <h1>Log In</h1>
        
          <form onSubmit={handleLogin}>
    
            <label>Email:</label>
            <input
              type="email"
              name="email"
              value={email}
              onChange={handleEmailChange}
            />
    
            <label>Password:</label>
            <input
              type="password"
              name="password"
              value={password}
              onChange={handlePasswordChange}
            />
    
            <button type="submit">Signup</button>
            {errorMessage !== "" ? <p>{errorMessage}</p> : null}
            
    
          </form>
          
        </div>
      );
    }
    
    export default Login;