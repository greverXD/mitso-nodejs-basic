import * as repo from "./client.memory.repository.js"
import { Client } from "./client.model.js"
import * as orderRepo from "../order/order.memory.repository.js"
import * as productRepo from "../products/product.memory.repository.js"
export const getClients= () => repo.getAll()
export const getClient = (id) => repo.getById(id)
export const createClient = (data) =>{
    const client = new Client(
        Data.now().toString(),
        data.fullname,
        data.address,
        data.numberPhone,
        data.bonuscard
    )
    return repo.create(client)
}
export const updateClient = (id,data)=> repo.update(id,data)
export const deleteClient = (id)=>{
    const orders = orderRepo.getAll.filter(o => o.clientId === id)
    orders.forEach(order => {
        productRepo.removeByOrderById(order.id)
    });
    orderRepo.removeByClientId(id)
    return repo.remove(id)

}