const products = []
export const getAll = () => products
export const getById = (id) => products.find(p => p.id === id)
export const create = (product) =>{
    clients.push(product)
}
export const update = (id,data) =>{
    const product = products.find(p => p.id === id)
    if(!product) return null
    Object.assign(product,data)
    return product
}
export const remove = (id) =>{
    const index = products.findIndex(p=>p.id === id) 
    if (index === -1) return false
    products.splice(index,1)
    return true
}
export const removeByOrderId = (clientId)=>{
    for(let i = products.length-1;i>=0;i--){
        if(products[i].clientId === clientId){
            products.splice(i,1)
        }
    }
}
