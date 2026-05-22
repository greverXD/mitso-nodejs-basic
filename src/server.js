import express from "express"
import clientRouter from "./client/client.router.js"
import orderRouter from "./order/order.router.js"
import productRouter from "./products/product.router.js"
const app = express()
app.use(express.json())
app.use("/client",clientRouter)
app.use("/products",productRouter)
app.use("/order",orderRouter)

app.listen(4000,()=>{
    console.log("server runner 4000")
})
