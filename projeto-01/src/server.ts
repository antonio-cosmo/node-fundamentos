import express from 'express'
import { categoryRoutes } from './routes/category.routes'
import { specificationRoutes } from './routes/specification.routes'

const app = express()

app.use(express.json())
app.use('/category',categoryRoutes)
app.use('/specification', specificationRoutes)

app.listen('3333')