import * as repo from "./product.memory.repository.ts"
import { Product } from "./product.model"

type CreateProductDto = {
 name: string
 price: number
 ageOfIssue: number
 lifeTime: number
 orderId: string
}

export const getProducts = (): Product[] => repo.getAll()

export const getProduct = (id: string): Product | undefined =>
 repo.getById(id)

export const createProduct = (data: CreateProductDto): Product => {

 const product: Product = {
  id: Date.now().toString(),
  name: data.name,
  price: data.price,
  ageOfIssue: data.ageOfIssue,
  lifeTime: data.lifeTime,
  orderId: data.orderId
 }

 return repo.create(product)
}

export const updateProduct = (
 id: string,
 data: Partial<Product>
): Product | null => repo.update(id, data)

export const deleteProduct = (id: string): boolean =>
 repo.remove(id)