import { Router } from 'express'
import { createSpecificationController } from '../modules/cars/useCases/createSpecification'
import { listSpecificationController } from '../modules/cars/useCases/listSpecification'


const specificationRoutes = Router()

specificationRoutes.post('/', (resquest, response)=>{
  const {name, description} = resquest.body
  
  return createSpecificationController.handle(name, description)
 
})

specificationRoutes.get('/', (request, response)=>{
  return listSpecificationController.handle(request, response)
})

export {specificationRoutes}