import { Request,Response, NextFunction } from "express";
import { logger } from "../logger"
import { response } from "express";
export const requestLogger = (
    req:Request,
    res:Response,
    next:NextFunction
)=> {
    const start = Date.now()

    res.on("finish", ()=>{
        const duration = Date.now() - start
        logger.info(`
            ${req.method} ${req.originalUrl}
            query:${JSON.stringify(req.query)}
            body:${JSON.stringify(req.body)}
            status:${res.statusCode}
            ${duration}ms
            `)
    })
    next()
}