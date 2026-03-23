import express from "express"
import clientRouter from "./client/client.router.js"
import orderRouter from "./order/order.router.js"
import productRouter from "./products/product.router.ts"

const app = express()

app.use(express.json())

app.use("/client", clientRouter)
app.use("/order", orderRouter)
app.use("/products", productRouter)

app.listen(4000, () => {
 console.log("Server running on port 4000")
})