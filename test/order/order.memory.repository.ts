import { Order } from "./order.model"

const orders: Order[] = []

export const getAll = (): Order[] => orders

export const getById = (id: string): Order | undefined =>
 orders.find(o => o.id === id)

export const create = (order: Order): Order => {
 orders.push(order)
 return order
}

export const update = (
 id: string,
 data: Partial<Order>
): Order | null => {

 const order = orders.find(o => o.id === id)

 if (!order) return null

 Object.assign(order, data)

 return order
}

export const remove = (id: string): boolean => {

 const index = orders.findIndex(o => o.id === id)

 if (index === -1) return false

 orders.splice(index, 1)

 return true
}