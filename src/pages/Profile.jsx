import React from 'react'
import { useState, useEffect } from "react"
import { profileService, deleteProfileService, editPorfileSevice } from "../services/profile.services";
import { useNavigate, useParams, NavLink } from "react-router-dom"
import CircleLoader from "react-spinners/CircleLoader";


function Profile() {

  const navigate = useNavigate()
 

  const { userId } = useParams()

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

  
  return (
    <div>
        
        
        <h2>Hola {details.username}</h2>
        <br />
        <p>Email: {details.email}</p>
        
        


        <NavLink to={"/profile/edit"}><button>Editar</button></NavLink>
        <NavLink to={"/products"}><button>Productos</button></NavLink>
  



    </div>
  )
}

export default Profile