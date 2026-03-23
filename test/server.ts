import express from "express"
import clientRouter from "./client/client.router.js"
import orderRouter from "./order/order.router.js"
import productRouter from "./products/product.router.ts"
import {logger} from "./logger.ts"
import { requestLogger } from "./middleware/logger.midleware.ts"
import { errorMiddleware } from "./middleware/error.middleware.ts"
process.on("uncaughtException", (err) => {
 logger.error(`Uncaught Exception: ${err.message}`)
})

process.on("unhandledRejection", (reason) => {
 logger.error(`Unhandled Rejection: ${reason}`)
})
const app = express()

app.use(express.json())
app.use(requestLogger)
app.use("/client", clientRouter)
app.use("/order", orderRouter)
app.use("/products", productRouter)
app.use(errorMiddleware)
app.listen(4000, () => {
 console.log("Server running on port 4000")
})