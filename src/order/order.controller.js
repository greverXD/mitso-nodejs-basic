import * as service from "./order.service.js"
import * as productRepo from "../products/product.memory.repository.js"

export const getOrders = (req,res)=>{
 res.json(service.getOrders())
}

export const getOrder = (req,res)=>{
 const order = service.getOrder(req.params.orderId)
 res.json(order)
}

export const getOrderProducts = (req,res)=>{

 const products = productRepo
  .getAll()
  .filter(p => p.orderId === req.params.orderId)

 res.json(products)
}

export const createOrder = (req,res)=>{
 const order = service.createOrder(req.body)
 res.status(201).json(order)
}

export const updateOrder = (req,res)=>{
 const order = service.updateOrder(req.params.orderId,req.body)
 res.json(order)
}

export const deleteOrder = (req,res)=>{
 service.deleteOrder(req.params.orderId)
 res.status(204).send()
}