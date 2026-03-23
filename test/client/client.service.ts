import * as repo from "./client.memory.repository.js"
import { Client } from "./client.model.js"
import * as orderRepo from "../order/order.memory.repository.js"
import * as productRepo from "../products/product.memory.repository.js"

type CreateClientDto = Omit<Client, "id">

export const getClients = (): Client[] => repo.getAll()

export const getClient = (id: string): Client | undefined =>
 repo.getById(id)

export const createClient = (data: CreateClientDto): Client => {

 const client: Client = {
  id: Date.now().toString(),
  ...data
 }

 return repo.create(client)
}

export const updateClient = (id: string, data: Partial<Client>) =>
 repo.update(id, data)

export const deleteClient = (id: string): boolean => {

 const orders = orderRepo.getAll().filter(o => o.clientId === id)

 orders.forEach(order => {
  productRepo.removeByOrderId(order.id)
 })

 orderRepo.remove(id)

 return repo.remove(id)
}