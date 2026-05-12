import { Request, Response } from "express"
import * as service from "./products.service.js"
type Params = {
    productsId: string
}
export const getProducts = (req: Request, res: Response) => {
 res.json(service.getProducts())
}

export const getProduct = (req: Request<Params>, res: Response) => {

 const product = service.getProduct(req.params.productsId)

 if (!product) {
  return res.status(404).json({ message: "not found" })
 }

 res.json(product)
}

export const createProduct = (req: Request, res: Response) => {

 const product = service.createProduct(req.body)

 res.status(201).json(product)
}

export const updateProduct = (req: Request<Params>, res: Response) => {

 const product = service.updateProduct(
  req.params.productsId,
  req.body
 )

 res.json(product)
}

export const deleteProduct = (req: Request<Params>, res: Response) => {

 service.deleteProduct(req.params.productsId)

 res.status(204).send()
}