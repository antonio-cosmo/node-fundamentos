import {Router} from 'express'
import { CategoriesRepository } from '../repositories/categoriesRepository'
const categoryRoutes = Router()


categoryRoutes.post('/', (request, response)=>{
  const {name, description} = request.body
  const categoryExist = CategoriesRepository.findByName(name)
  if(!categoryExist){
    CategoriesRepository.create({name, description})
    return response.status(201).send()

  } 

  return response.status(200).json({message: 'Categoria ja existe'})

})

categoryRoutes.get('/', (request, response)=>{
  const listCategories = CategoriesRepository.all()

  return response.status(200).json(listCategories)
})

export { categoryRoutes }