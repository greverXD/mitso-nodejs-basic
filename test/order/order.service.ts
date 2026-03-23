import * as repo from "./order.memory.repository"
import { Order } from "./order.model"
import * as productRepo from "../products/product.memory.repository"

type CreateOrderDto = {
 orderNumber: number
 numbers: number
 clientId: string
}

export const getOrders = (): Order[] => repo.getAll()

export const getOrder = (id: string): Order | undefined =>
 repo.getById(id)

export const createOrder = (data: CreateOrderDto): Order => {

 const order: Order = {
  id: Date.now().toString(),
  orderNumber: data.orderNumber,
  numbers: data.numbers,
  clientId: data.clientId,
  productsIds: []
 }

 return repo.create(order)
}

export const updateOrder = (
 id: string,
 data: Partial<Order>
): Order | null => repo.update(id, data)

export const deleteOrder = (id: string): boolean => {

 // удалить продукты заказа
 productRepo.removeByOrderId(id)

 return repo.remove(id)
}