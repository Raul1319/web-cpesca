import React from 'react'
import {useEffect} from 'react'
import {useState} from 'react'
import {useNavigate, useParams} from 'react-router-dom'
import {createCommenstServices} from "../services/comments.services"

function CommentCreate(props) {

 const { id } = useParams();
 const navigate = useNavigate();

 const [ commentsInput, setCommentsInput] = useState("")

 
 const handleCommentsChange = (e) => setCommentsInput(e.target.value)

 const handleSubmit = async (e) => {
  
    e.preventDefault()

    const newComment= {
        comments: commentsInput,
        id: id
    }

    try {

        await createCommenstServices(id, newComment)

        navigate("/products")
        
    } catch (error) {
        navigate("/error")
        
    }
 }
  return (
    <div>

        <h3>Añade un Comentario</h3>
        <form onSubmit={handleSubmit}>

        <label htmlFor="comments">Comentarios:</label>
        <input type="text" name="comments" onChange={handleCommentsChange} />
        <br />

        <button type="submit">Comenta</button>
        </form>
    </div>
  )
}

export default CommentCreate