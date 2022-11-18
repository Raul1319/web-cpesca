import { useContext } from "react";
import { NavLink } from 'react-router-dom';
import { AuthContext } from "../context/auth.context";
import Button from 'react-bootstrap/Button';

function Navbar() {

  const { authenticateUser, isLoggedIn } = useContext(AuthContext)

  const handleLogout = () => {
   
    
    localStorage.removeItem("authToken")
    //borramos el token 
    authenticateUser()

  }
  return (
    <div id="navbar">

      <h1>CPESCA</h1>
    
    {isLoggedIn === true ? (
      <div>
      <NavLink to="/">
      <Button variant="primary" size="lg" disabled>
        Home
      </Button>{' '}
      </NavLink>
      <NavLink to="profile">
      <Button variant="primary" size="lg" disabled>
        Profile
      </Button>{' '}
      </NavLink>
      <button onClick={handleLogout}>Cerrar Sesión</button>


      </div>

    ) : (
      <div>
        <NavLink to="/">
        <Button variant="warning">Home</Button>{' '}
        </NavLink>
        <NavLink to="/signup">
        <Button variant="primary">Signup</Button>{' '}
        </NavLink>
        <NavLink to="/login">
        <Button variant="danger">Login</Button>{' '}
        </NavLink>
      

      </div>

    )
  }
    
    
    
    
    
    </div>
  )
}

export default Navbar