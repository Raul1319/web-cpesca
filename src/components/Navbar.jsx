import { useContext } from "react"
import { NavLink } from 'react-router-dom'
import { AuthContext } from "../context/auth.context"

function Navbar() {

  const { authenticateUser, isLoggedIn } = useContext(AuthContext)

  const handleLogout = () => {
   
    
    localStorage.removeItem("authToken")
    //borramos el token 
    authenticateUser()

  }
  return (
    <div id="navbar">
    
    {isLoggedIn === true ? (
      <div>
      <NavLink to="/">
      <button>Home</button>
      </NavLink>
      <NavLink to="profile">
      <button>Profile</button>
      </NavLink>
      <button onClick={handleLogout}>Cerrar Sesión</button>


      </div>

    ) : (
      <div>
        <NavLink to="/">
        <button>Home</button>
        </NavLink>
        <NavLink to="/signup">
        <button>Signup</button>
        </NavLink>
        <NavLink to="/login">
        <button>Login</button>
        </NavLink>
      

      </div>

    )
  }
    
    
    
    
    
    </div>
  )
}

export default Navbar