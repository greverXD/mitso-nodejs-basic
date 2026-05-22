const clients = []
export const getAll = () => clients
export const getById = (id) => clients.find(с => c.id === id)
export const create = (client) =>{
    clients.push(client)
}
export const update = (id,data) =>{
    const client = clients.find(c => c.id === id)
    if(!client) return null
    Object.assign(client,data)
    return client
}
export const remove = (id) =>{
    const index = clients.findIndex(c => c.id === id) 
    if (index === -1) return false
    clients.splice(index,1)
    return true
}
