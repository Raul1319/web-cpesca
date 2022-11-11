import { useState } from "react"

function Login() {
    const [username, setUserName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [errorMessage, setErrorMessage] = useState("")

    const handleUserNameChange = (e) => setUserName(e.target.value);
    const handleEmailChange = (e) => setEmail(e.target.value);
    const handlePasswordChange = (e) => setPassword(e.target.value);

    const handleLogin = async (e) => {
        e.preventDefault()
    }
  
    return (
        <div>
    
          <h1>Sign Up</h1>
        
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
    
            
    
          </form>
          
        </div>
      );
    }
    
    export default Login;