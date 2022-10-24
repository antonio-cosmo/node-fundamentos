import { Router } from 'express'
import { CreateSpecificationController } from '../modules/cars/useCases/createSpecification/CreateSpecificationController'
import { ListCategoriesController } from '../modules/cars/useCases/listCategory/ListCategoriesController'



const specificationRoutes = Router()

const createSpecificationController = new CreateSpecificationController()
const listSpecificationController = new ListCategoriesController()

specificationRoutes.post('/',createSpecificationController.handle)

specificationRoutes.get('/', listSpecificationController.handle)

export {specificationRoutes}