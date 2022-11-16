import service from "./config.services";

const productsService = (productsAll) =>{
    return service.get("/products/products", productsAll)

}

const productsCreateSevice = (createProduct) =>{
    return service.post("/products/create-products", createProduct)
}

const categoryProductsSevice = (productList) =>{
   return service.get("/products/:list", productList)
}

const editProductService = (editProduct) =>{
    return service.patch("/products/:edit", editProduct)
}

const deleteProductService = (deleteProduct) =>{
    return service.delete("/products/:deleteProductsId", deleteProduct)
}

export{
    productsService,
    productsCreateSevice,
    categoryProductsSevice,
    editProductService,
    deleteProductService
}