import {Router} from 'express'
import { CategoriesRepository } from '../repositories/categoriesRepository'
const categoryRoutes = Router()


categoryRoutes.post('/', (request, response)=>{
  const {name, description} = request.body

  CategoriesRepository.create({name, description})

  return response.status(201).send()
})

categoryRoutes.get('/', (request, response)=>{
  const listCategories = CategoriesRepository.all()

  return response.status(200).json(listCategories)
})

export { categoryRoutes }