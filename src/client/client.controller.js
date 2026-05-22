import * as service from "./client.service.js"
import * as orderRepo from "../order/order.memory.repository.js"
export const getClients = (req,res)=>{
    res.json(service.getClients())
}
export const getClient = (req,res)=>{
    const client = service.getClient(req.params.clientId)
    if(!client) return res.status(404).json({message:"not found"})
        res.json(client)
}
export const getClientOrder = (req,res)=>{
    const orde = orderRepo.getAll().filter((o=>o.clientId === eq.params.clientId))
    res.json(orders)
}
export const createClient = (req,res)=>{
    const client = service.createClient(req.body)
    res.status(201).json(client)
}
export const updateClient =(req,res)=>{
    const client = service.updateClient(req.params.clientId,req.body)
    res.json(client)
}
export const deleteClient=(req,res)=>{
    service.deleteClient(req.params.clientId)
    res.status(204).send()
}