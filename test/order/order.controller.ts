import { Request, Response } from "express"
import * as service from "./order.service.js"
import * as productRepo from "../products/product.memory.repository.js"
type Params ={
    orderId:string
}
export const getOrders = (req: Request, res: Response) => {
 res.json(service.getOrders())
}

export const getOrder = (req: Request<Params>, res: Response) => {

 const order = service.getOrder(req.params.orderId)

 if (!order) {
  return res.status(404).json({ message: "not found" })
 }

 res.json(order)
}

export const getOrderProducts = (req: Request, res: Response) => {

 const products = productRepo
  .getAll()
  .filter(p => p.orderId === req.params.orderId)

 res.json(products)
}

export const createOrder = (req: Request, res: Response) => {

 const order = service.createOrder(req.body)

 res.status(201).json(order)
}

export const updateOrder = (req: Request<Params>, res: Response) => {

 const order = service.updateOrder(
  req.params.orderId,
  req.body
 )

 res.json(order)
}

export const deleteOrder = (req: Request<Params>, res: Response) => {

 service.deleteOrder(req.params.orderId)

 res.status(204).send()
}