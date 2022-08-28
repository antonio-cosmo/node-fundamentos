import {Router} from 'express'
import { CategoriesRepository } from '../modules/cars/repositories/CategoriesRepository'
import { createCategoryController } from '../modules/cars/useCases/createCategoryUseCase';
const categoryRoutes = Router()
const categoriesRepository = new CategoriesRepository()

categoryRoutes.post('/', (request, response)=>{
  return createCategoryController.handle(request, response)
})

categoryRoutes.get('/', (request, response)=>{
  const listCategories = categoriesRepository.all()

  return response.status(200).json(listCategories)
})

export { categoryRoutes }