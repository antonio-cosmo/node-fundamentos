import express from 'express'
import cors from 'cors'
import 'reflect-metadata'
import { dataSource } from './database/data-source'
import './shared/container/index'
import swaggerUI from 'swagger-ui-express'
import swaggerDoc from './swagger.json'
import { categoryRoutes } from './routes/category.routes'
import { specificationRoutes } from './routes/specification.routes'

dataSource.initialize().then(() => {
    console.log("Data Source has been initialized!")
    const app = express()

    app.use(cors({origin: true}))
    app.use(express.json())

    app.use('/api-docs', swaggerUI.serve, swaggerUI.setup(swaggerDoc))
    app.use('/category',categoryRoutes)
    app.use('/specification', specificationRoutes)

    app.listen('3333',()=>{
        console.log('Endereço: http://localhost:3333')
})
})
.catch((err) => {
    console.error("Error during Data Source initialization", err)
})

