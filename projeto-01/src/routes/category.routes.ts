import { ListCategoriesController } from './../modules/cars/useCases/listCategory/ListCategoriesController';
import { CreateCategoryController } from './../modules/cars/useCases/createCategory/CreateCategoryController';
import {Router} from 'express'
import multer from 'multer'
import { uploadCategoryController } from '../modules/cars/useCases/uploadCategory';

const categoryRoutes = Router()

const createCategoryController = new CreateCategoryController()
const listCategoriesController = new ListCategoriesController()

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
categoryRoutes.post('/', createCategoryController.handle)

categoryRoutes.get('/', listCategoriesController.handle)

categoryRoutes.post('/uploads',uploads.single('file'),(request, response)=>{
  return uploadCategoryController.handle(request, response)
})

export { categoryRoutes }