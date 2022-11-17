import React from 'react'
import { useState, createContext, useEffect } from "react"
import { profileService, deleteProfileService } from "../services/profile.services";
import { useNavigate, useParams, Link } from "react-router-dom"
import { verifyService } from "../services/auth.services";
import CircleLoader from "react-spinners/CircleLoader";


function Profile() {

  const navigate = useNavigate()
 

  const {idUser} = useParams()

  const [details, setDetails] = useState(null)
  const [isFetching, setIsFetching] = useState(true)
  const [errorMessage, setErrorMessage] = useState("");
  

  useEffect(() =>{

    getData()
  }, [])
  
  const getData = async () =>{

    try {
      

      const response = await profileService()
      setDetails(response.data)
      setIsFetching(false)

      
    } catch (error) {
      navigate("/error")
    
    }




  }

  if(isFetching === true) {
    return <CircleLoader/>
  }

  const handleDelete = async () =>{
    

    try {

      await deleteProfileService(idUser)
      
    } catch (error) {
      navigate("/error")
      
    }
  }
  return (
    <div>
        
        
        <h3>Bienvenido a tu Perfil</h3>



    </div>
  )
}

export default Profile