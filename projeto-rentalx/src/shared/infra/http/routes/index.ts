import { Router } from 'express'
import swaggerUI from 'swagger-ui-express'
import swaggerDoc from '../../../../swagger.json'
import { categoryRoutes } from './category.routes'
import { specificationRoutes } from './specification.routes'
import { userRoutes } from './user.routes'
import { authenticateRoutes } from './authenticate.routes'
import { ensureAuthenticate } from '../middlewares/ensureAuthenticate'

const routes = Router();

routes.use('/api-docs', swaggerUI.serve, swaggerUI.setup(swaggerDoc))
routes.use(authenticateRoutes)
routes.use(ensureAuthenticate);
routes.use('/category',categoryRoutes)
routes.use('/specification', specificationRoutes)
routes.use('/users', userRoutes)

export { routes }