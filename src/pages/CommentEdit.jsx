import React from 'react'
import {useEffect} from 'react'
import {useState} from 'react'
import {useNavigate, useParams} from 'react-router-dom'
import { createCommenstServices} from "../services/comments.services"

function CommentEdit() {

  const {produtId} = useParams();
  const navigate = useNavigate();
  const [commentsInput, setCommentsInput] = useState("")

  const handleCommentsChange = (e) => setCommentsInput(e.target.value);


  const handleCreate = async (e) =>{
    e.preventDefault()

    const newCommentEdit= {
      comments: commentsInput,
      products: produtId
    }

    try {

      await createCommenstServices(produtId, newCommentEdit)
      
      navigate("/products")
      
    } catch (error) {
      navigate("/error")
      
    }
  }
  return (
    <div>

      <h4>Edita tu Comentario</h4>

      <form onSubmit={handleCreate}>

        <label htmlFor="comments">Comentario:</label>
        <input type="text" name="comments" onChange={handleCommentsChange} />
        <br />

        <button type="submit">Cometario</button>
      </form>
      
      </div>
  )
}

export default CommentEdit