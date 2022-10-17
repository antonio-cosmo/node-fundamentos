import {Router} from 'express'
import multer from 'multer'
import createCategoryController from '../modules/cars/useCases/createCategory';
import  listCategoriesController  from '../modules/cars/useCases/listCategory';
import { uploadCategoryController } from '../modules/cars/useCases/uploadCategory';
const categoryRoutes = Router()

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
categoryRoutes.post('/', (request, response)=>{
  return createCategoryController().handle(request, response)
})

categoryRoutes.get('/', (request, response)=>{
  return listCategoriesController().handle(request, response)
})

categoryRoutes.post('/uploads',uploads.single('file'),(request, response)=>{
  return uploadCategoryController.handle(request, response)
})

export { categoryRoutes }