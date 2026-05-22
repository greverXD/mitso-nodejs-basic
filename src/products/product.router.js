import express from "express"
import * as controller from "./products.controller.js"

const router = express.Router()

router.get("/", controller.getProducts)
router.get("/:productsId", controller.getProduct)
router.post("/", controller.createProduct)
router.put("/:productsId", controller.updateProduct)
router.delete("/:productsId", controller.deleteProduct)

export default router