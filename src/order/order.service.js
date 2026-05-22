import * as repo from "./order.memory.repository.js"
import { Order } from "./order.model.js"
import * as productRepo from "../products/product.memory.repository.js"

export const getOrders = () => repo.getAll()

export const getOrder = (id) => repo.getById(id)

export const createOrder = (data) => {

 const order = new Order(
  Date.now().toString(),
  data.orderNumber,
  data.numbers,
  data.clientId,
  []
 )

 return repo.create(order)
}

export const updateOrder = (id,data) =>
 repo.update(id,data)

export const deleteOrder = (id) => {

 productRepo.removeByOrderId(id)

 return repo.remove(id)
}