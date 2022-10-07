import {Router} from 'express'
import { createCategoryController } from '../modules/cars/useCases/createCategory';
import { listCategoriesController } from '../modules/cars/useCases/listCategory';
import { uploadCategoryController } from '../modules/cars/useCases/uploadCategory';
const categoryRoutes = Router()

categoryRoutes.post('/', (request, response)=>{
  return createCategoryController.handle(request, response)
})

categoryRoutes.get('/', (request, response)=>{
  return listCategoriesController.handle(request, response)
})

categoryRoutes.post('/uploads',(request, response)=>{
  return uploadCategoryController.handle(request, response)
})

export { categoryRoutes }