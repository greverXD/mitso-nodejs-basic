import * as repo from "./product.memory.repository.js"
import { Product } from "./product.model.js"

export const getProducts = ()=> repo.getAll()

export const getProduct = (id)=> repo.getById(id)

export const createProduct = (data)=>{

 const product = new Product(
  Date.now().toString(),
  data.name,
  data.price,
  data.ageOfIssue,
  data.lifeTime,
  data.orderId
 )

 return repo.create(product)
}

export const updateProduct = (id,data)=>
 repo.update(id,data)

export const deleteProduct = (id)=>
 repo.remove(id)