import service from "./config.services";

const productsService = (productsAll) =>{
    return service.get("/products/products", productsAll)

}

const productsCreateSevice = (create, createProduct) =>{
    return service.post(`/products/${create}/products`, createProduct)
}

const categoryProductsSevice = ( list, productList) =>{
   return service.get(`/products/${list}`, productList)
}

const editProductService = (edit ,editProduct) =>{
    return service.patch(`/products/${edit}`, editProduct)
}

const deleteProductService = ( deleteProductsId, deleteProduct) =>{
    return service.delete(`/products/${deleteProductsId}`, deleteProduct)
}

export{
    productsService,
    productsCreateSevice,
    categoryProductsSevice,
    editProductService,
    deleteProductService
}