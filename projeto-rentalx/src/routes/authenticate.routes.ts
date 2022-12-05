import {Router} from 'express';
import { AuthenticateUseController } from '../modules/accounts/useCases/authenticate/AuthenticateController';

const authenticateController = new AuthenticateUseController();

const authenticateRoutes = Router();

authenticateRoutes.post('/session', authenticateController.handle)

export {authenticateRoutes}