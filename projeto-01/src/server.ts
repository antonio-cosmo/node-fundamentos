import express from 'express'
import multer from 'multer'
import { categoryRoutes } from './routes/category.routes'
import { specificationRoutes } from './routes/specification.routes'

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, './tmp/uploads')
    },
    filename: function (req, file, cb) {
      const extension = file.originalname.split('.')[1]
      const newFileName = new Date().getTime().toString()
      cb(null, `${newFileName}.${extension}`)
    }
  })
  
const uploads = multer({storage})
const app = express()

app.use(express.json())

app.use('/category',uploads.single('file'),categoryRoutes)
app.use('/specification', specificationRoutes)

app.listen('3333',()=>{
    console.log('Endereço: http://localhost:3333')
})