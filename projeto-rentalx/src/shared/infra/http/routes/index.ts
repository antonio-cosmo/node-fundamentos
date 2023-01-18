import { Router } from 'express'
import swaggerUI from 'swagger-ui-express'
import swaggerDoc from '../../../../swagger.json'
import { categoryRoutes } from './category.routes'
import { specificationRoutes } from './specification.routes'
import { userRoutes } from './user.routes'
import { carRoutes } from './car.routes'
import { authenticateRoutes } from './authenticate.routes'
const routes = Router();

routes.use('/api-docs', swaggerUI.serve, swaggerUI.setup(swaggerDoc));
routes.use(authenticateRoutes);
routes.use('/category',categoryRoutes);
routes.use('/specification', specificationRoutes);
routes.use('/users', userRoutes);
routes.use('/cars', carRoutes);

export { routes }