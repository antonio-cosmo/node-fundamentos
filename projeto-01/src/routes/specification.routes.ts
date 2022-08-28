import { CreateSpecificationService } from './../modules/cars/services/CreateSpecificationService';
import { Router } from 'express'
import { SpecificationsRepository } from '../modules/cars/repositories/SpecificationsRepository';

const specificationRoutes = Router()

const specificationsRepository = new SpecificationsRepository()

specificationRoutes.post('/', (resquest, response)=>{
  const {name, description} = resquest.body
  const createSpecification = new CreateSpecificationService(specificationsRepository)
  createSpecification.execute({name, description})

  return response.status(201).send()
})

specificationRoutes.get('/', (request, response)=>{
  const specifications = specificationsRepository.all

  return response.status(200).json(specifications)
})

export {specificationRoutes}