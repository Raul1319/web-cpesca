import React from 'react'
import { useState } from "react"
import { editPorfileSevice } from "../services/profile.services";
import { useNavigate, useParams, Link } from "react-router-dom"


function ProfileEdit() {

  const navigate = useNavigate()

  const {iduser} = useParams()
  
  return (
    <div>
      
      <h2>Edita tu Perfil</h2>
      
      
      
       </div>
  )
}

export default ProfileEdit