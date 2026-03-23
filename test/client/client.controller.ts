import { Request, Response } from "express"
import * as service from "./client.service.js"
type Params = {
    clientId: string
}
export const getClients = (req: Request, res: Response) => {
 res.json(service.getClients())
}

export const getClient = (req: Request<Params>, res: Response) => {

 const client = service.getClient(req.params.clientId)

 if (!client) {
  return res.status(404).json({ message: "not found" })
 }

 res.json(client)
}

export const createClient = (req: Request, res: Response) => {

 const client = service.createClient(req.body)

 res.status(201).json(client)
}

export const updateClient = (req: Request<Params>, res: Response) => {

 const client = service.updateClient(
  req.params.clientId,
  req.body
 )

 res.json(client)
}

export const deleteClient = (req: Request<Params>, res: Response) => {

 service.deleteClient(req.params.clientId)

 res.status(204).send()
}