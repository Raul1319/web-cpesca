import React from 'react'
import { useState, createContext, useEffect } from "react"
import { profileService } from "../services/profile.services";
import { useNavigate } from "react-router-dom"
import { verifyService } from "../services/auth.services";

function Profile() {

  const navigate = useNavigate()


  const [username, setUserName] = useState(null);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleUserNameChange = (e) => setUserName(e.target.value);
  const handleEmailChange = (e) => setEmail(e.target.value);
  const handlePasswordChange = (e) => setPassword(e.target.value);
  return (
    <div>
        
        
        <h3>Bienvenido a tu Perfil</h3>



    </div>
  )
}

export default Profile