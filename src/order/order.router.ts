import express from "express"
import * as controller from "./order.controller.js"

const router = express.Router()

router.get("/", controller.getOrders)
router.get("/:orderId", controller.getOrder)
router.get("/:orderId/products", controller.getOrderProducts)
router.post("/", controller.createOrder)
router.put("/:orderId", controller.updateOrder)
router.delete("/:orderId", controller.deleteOrder)

export default router