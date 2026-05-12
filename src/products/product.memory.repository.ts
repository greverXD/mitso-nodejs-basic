import { Product } from "./product.model"
const products: Product[] = []
export const getAll = (): Product[] => products
export const getById = (id: string): Product | undefined =>
 products.find(p => p.id === id)
export const create = (product: Product): Product => {
 products.push(product)
 return product
}
export const update = (
 id: string,
 data: Partial<Product>
): Product | null => {

 const product = products.find(p => p.id === id)

 if (!product) return null

 Object.assign(product, data)

 return product
}
export const remove = (id: string): boolean => {

 const index = products.findIndex(p => p.id === id)

 if (index === -1) return false

 products.splice(index, 1)

 return true
}
export const removeByOrderId = (orderId: string): void => {

 for (let i = products.length - 1; i >= 0; i--) {
  if (products[i].orderId === orderId) {
   products.splice(i, 1)
  }
 }
}