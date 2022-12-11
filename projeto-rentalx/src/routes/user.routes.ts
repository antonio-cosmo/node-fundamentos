import {Router} from 'express';
import multer from 'multer';
import { CreateUsersController } from '../modules/accounts/useCases/createUsers/CreateUsersController';
import { ListUsersController } from '../modules/accounts/useCases/listUsers/ListUsersController';
import { UpdateUserAvatarController } from '../modules/accounts/useCases/updateUserAvatar/UpdateUserAvatarController';
import configUpload from '../config/upload'
const userRoutes = Router();

const uploadAvatar = multer(configUpload.upload('avatar'));
const createUsersController = new CreateUsersController();
const listUserController = new ListUsersController();
const updateUserAvatarController = new UpdateUserAvatarController;

userRoutes.post('/', createUsersController.handle);
userRoutes.get('/', listUserController.handle);
userRoutes.patch('/avatar', uploadAvatar.single('file'),updateUserAvatarController.handle)

export { userRoutes }