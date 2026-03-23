import { Request, Response, NextFunction } from "express"
import { logger } from "../logger"

export const errorMiddleware = (
 err: Error,
 req: Request,
 res: Response,
 next: NextFunction
) => {

 logger.error(err)

 res.status(500).json({
  message: "Internal Server Error"
 })
}