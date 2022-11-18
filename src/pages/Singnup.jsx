import { useState } from "react"
import { signupService } from "../services/auth.services";
import { useNavigate } from "react-router-dom"
import Button from 'react-bootstrap/Button';

function Signup() {
      
      <div className="fondo">

      
      </div>


     //configuracón del navigate
    const navigate = useNavigate()

    const [username, setUserName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [errorMessage, setErrorMessage] = useState("")
    

    const handleUserNameChange = (e) => setUserName(e.target.value);
    const handleEmailChange = (e) => setEmail(e.target.value);
    const handlePasswordChange = (e) => setPassword(e.target.value);

    const handleSignup = async (e) => {
        e.preventDefault()


        // Recopilar info del user
        const newUser = {
            username: username,
            email: email,
            password: password
        }

        
        try {
            // contactar BE crear usuario
            await signupService(newUser)

            // redireccionar a login posibles errores de status
            navigate("/login")
            
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
    
          <h1>Sign Up</h1>
        
          <form onSubmit={handleSignup}>

          <label>Username:</label>
            <input
              type="username"
              name="username"
              value={username}
              onChange={handleUserNameChange}
            />
    
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
    
            <Button type="submit" variant="success">Singnup</Button>{' '}

            {errorMessage !== "" ? <p>{errorMessage}</p> : null}
    
            
    
          </form>
          
        </div>
      );
    }
    
    export default Signup;