import express, { NextFunction, Request,  Response } from 'express'
import 'reflect-metadata'
import 'express-async-errors'
import cors from 'cors'
import { dataSource } from './database/data-source'
import './shared/container/index'
import { routes } from './routes'
import { AppError } from './shared/AppError'



dataSource.initialize().then(() => {
    console.log("Data Source has been initialized!")
    const app = express()

    app.use(cors({origin: true}))
    app.use(express.json())
    app.use(routes)

    routes.use(async (err: Error, req:Request, res:Response, next:NextFunction) => {
        if(err instanceof AppError){
        return res.status(err.status).json({message: err.message})
        }
    
        return res.status(500).json({
        status: 'error',
        message: `Internal server error - ${err.message}`
        })
    })
    app.listen('3333',()=>{
        console.log('Endereço: http://localhost:3333')
})
})
.catch((err) => {
    console.error("Error during Data Source initialization", err)
})

