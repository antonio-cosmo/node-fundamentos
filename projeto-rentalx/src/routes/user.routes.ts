import {Router} from 'express';
import { CreateUsersController } from '../modules/accounts/useCases/createUsers/CreateUsersController';
import { ListUsersController } from '../modules/accounts/useCases/listUsers/ListUsersController';

const userRoutes = Router();
const createUsersController = new CreateUsersController();
const listUserController = new ListUsersController();

userRoutes.post('/', createUsersController.handle);
userRoutes.get('/', listUserController.handle);

export { userRoutes }