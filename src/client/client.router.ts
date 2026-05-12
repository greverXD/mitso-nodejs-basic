import express from "express"
import * as controller from "./client.controller.js"

const router = express.Router()

router.get("/", controller.getClients)
router.get("/:clientId", controller.getClient)
router.post("/", controller.createClient)
router.put("/:clientId", controller.updateClient)
router.delete("/:clientId", controller.deleteClient)

export default router