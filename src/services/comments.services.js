import service from "./config.services";

const commentsProductsSevices = (commentsProducts) =>{
 return service.get("/comments/productIdComments", commentsProducts)
}

const createCommenstServices = (id, createComments) =>{
  return service.post(`/comments/createComments/${id}`, createComments)
}

const editCommentsServices = (productId,editComments) =>{
    return service.patch(`/comments/${productId}/comments`, editComments)
}

const deleteCommentsServices = (deleteCommentId, comments) =>{
    return service.patch(`/comments/${deleteCommentId}`, comments)
}

export{
    commentsProductsSevices,
    createCommenstServices,
    editCommentsServices,
    deleteCommentsServices
}