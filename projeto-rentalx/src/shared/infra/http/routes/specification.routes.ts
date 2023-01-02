import { CreateSpecificationController } from '@modules/cars/useCases/createSpecification/CreateSpecificationController'
import { ListSpecificationController } from '@modules/cars/useCases/listSpecification/ListSpecificationController'
import { Router } from 'express'



const specificationRoutes = Router()

const createSpecificationController = new CreateSpecificationController()
const listSpecificationController = new ListSpecificationController()

specificationRoutes.post('/',createSpecificationController.handle)

specificationRoutes.get('/', listSpecificationController.handle)

export {specificationRoutes}