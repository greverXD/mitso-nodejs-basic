const orders = []
export const getAll = () => orders
export const getById = (id) => orders.find(o => o.id === id)
export const create = (order) =>{
    orders.push(order)
}
export const update = (id,data) =>{
    const order = orders.find(o => o.id === id)
    if(!order) return null
    Object.assign(order,data)
    return order
}
export const remove = (id) =>{
    const index = orders.findIndex(o=>o.id === id) 
    if (index === -1) return false
    orders.splice(index,1)
    return true
}
export const removeByClientId = (clientId)=>{
    for(let i = orders.length-1;i>=0;i--){
        if(orders[i].clientId === clientId){
            orders.splice(i,1)
        }
    }
}
