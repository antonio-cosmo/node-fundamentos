import express from 'express'
import { AppDataSource } from './database'
import swaggerUI from 'swagger-ui-express'
import swaggerDoc from './swagger.json'
import { categoryRoutes } from './routes/category.routes'
import { specificationRoutes } from './routes/specification.routes'


const app = express()

app.use(express.json())

app.use('/api-docs', swaggerUI.serve, swaggerUI.setup(swaggerDoc))

AppDataSource.initialize().then(() => {
    console.log("Data Source has been initialized!")
})
.catch((err) => {
    console.error("Error during Data Source initialization", err)
})

app.use('/category',categoryRoutes)
app.use('/specification', specificationRoutes)

app.listen('3333',()=>{
    console.log('Endereço: http://localhost:3333')
})