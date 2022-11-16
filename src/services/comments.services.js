import service from "./config.services";

const commentsProductsSevices = (commentsProducts) =>{
 return service.get("/comments/productIdComments", commentsProducts)
}

const createCommenstServices = (createComments) =>{
  return service.post("/comments/createComments/:id", createComments)
}

const editCommentsServices = (editComments) =>{
    return service.patch("/comments/:productId/comments", editComments)
}

const deleteCommentsServices = (deleteComment) =>{
    return service.patch("/comments/deleteCommentId", deleteComment)
}

export{
    commentsProductsSevices,
    createCommenstServices,
    editCommentsServices,
    deleteCommentsServices
}