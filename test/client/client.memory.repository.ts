import { Client } from "./client.model.js"

const clients: Client[] = []

export const getAll = (): Client[] => clients

export const getById = (id: string): Client | undefined =>
 clients.find(c => c.id === id)

export const create = (client: Client): Client => {
 clients.push(client)
 return client
}

export const update = (id: string, data: Partial<Client>): Client | null => {
 const client = clients.find(c => c.id === id)
 if (!client) return null

 Object.assign(client, data)
 return client
}

export const remove = (id: string): boolean => {
 const index = clients.findIndex(c => c.id === id)
 if (index === -1) return false

 clients.splice(index, 1)
 return true
}