import { AuthenticateUseController } from '@modules/accounts/useCases/authenticate/AuthenticateController';
import {Router} from 'express';

const authenticateController = new AuthenticateUseController();

const authenticateRoutes = Router();

authenticateRoutes.post('/session', authenticateController.handle)

export {authenticateRoutes}