import { CreateSpecificationController } from '@modules/cars/useCases/createSpecification/CreateSpecificationController'
import { ListSpecificationController } from '@modules/cars/useCases/listSpecification/ListSpecificationController'
import { Router } from 'express'
import { ensureAdmin } from '../middlewares/ensureAdmin'
import { ensureAuthenticate } from '../middlewares/ensureAuthenticate'



const specificationRoutes = Router()

const createSpecificationController = new CreateSpecificationController()
const listSpecificationController = new ListSpecificationController()

specificationRoutes.get('/', listSpecificationController.handle)

specificationRoutes.use(ensureAuthenticate);
specificationRoutes.use(ensureAdmin);
specificationRoutes.post('/',createSpecificationController.handle)


export {specificationRoutes}