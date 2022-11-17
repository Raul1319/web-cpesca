import React from 'react'
import { useState, useEffect, useContext } from "react"
import { editPorfileSevice, profileService, deleteProfileService } from "../services/profile.services";
import { useNavigate, useParams, Link } from "react-router-dom"
import {AuthContext} from "../context/auth.context"
import CircleLoader from "react-spinners/CircleLoader";
import {verifyService} from "../services/auth.services"


function ProfileEdit() {

  const navigate = useNavigate();

  const {userId} = useParams();
  const {profileId} = useParams();

  const [details, setDetails] = useState(null);
  const [isFetching, setIsFetching] = useState(true);

  const [usernameInput, setUsernameInput] = useState("");
  const [emailInput, setEmailInput] = useState("");

  useEffect(() =>{
    getData()

  }, [])

  const getData = async () =>{

    try {

      const response = await profileService();
      setDetails(response.data);
      setUsernameInput(response.data.username);
      setEmailInput(response.data.email);
       
      setIsFetching(false);
    } catch (error) {
      navigate("/error");
      
    }

  }

   const handleUsernameChange = (e) => setUsernameInput(e.target.value);
   const handleEmailChange = (e) => setEmailInput(e.target.value);

   const handleEditProfile = async (e) => {

    e.preventDefaul();

    const editProfile = {

      username: usernameInput,
      email: emailInput
    }

    try {

      await  editPorfileSevice( profileId, editProfile)
      
      navigate("/profile")
    } catch (error) {
      navigate("/error")
      
    }

   }

   if(isFetching === true) {
    return <CircleLoader />
   }

   const handleDeleteProfile = async () => {

    try {

      await deleteProfileService(userId)

      navigate("/singup")
      
      
    } catch (error) {
      navigate("/error")
      
    }
   }

   
  return (
    <div>
      
      <h2>Edita tu Perfil</h2>
      <br />
      <h3>Bienvenido {details.username}</h3>
      <br />
      <form>
      <label htmlFor="username">Usuario</label>
      <input type="text" name="username" value={usernameInput} onChange={handleUsernameChange}></input>
      <br />
      <label htmlFor="email">Email:</label>
      <input type="email" name="email" value={emailInput} onChange={handleEmailChange}></input>
      <br />


      <button onClick={handleEditProfile}>Actualizar</button>
      
      <div>

       <button onClick={handleDeleteProfile}>Dar de Baja</button>

      </div>
      









      </form>
      
      
       </div>
  )
}

export default ProfileEdit