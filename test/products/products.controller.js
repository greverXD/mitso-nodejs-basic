import * as service from "./products.service.js"

export const getProducts = (req,res)=>{
 res.json(service.getProducts())
}

export const getProduct = (req,res)=>{
 res.json(service.getProduct(req.params.productsId))
}

export const createProduct = (req,res)=>{
 const product = service.createProduct(req.body)
 res.status(201).json(product)
}

export const updateProduct = (req,res)=>{
 const product = service.updateProduct(req.params.productsId,req.body)
 res.json(product)
}

export const deleteProduct = (req,res)=>{
 service.deleteProduct(req.params.productsId)
 res.status(204).send()
}