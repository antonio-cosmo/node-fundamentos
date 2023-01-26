import { CreateCarsController } from "@modules/cars/useCases/createCars/CreateCarsController";
import { CreateCarSpecificationController } from "@modules/cars/useCases/createCarSpecification/CreateCarSpecificationController";
import { FindAvailableCarsController } from "@modules/cars/useCases/findAvailableCars/FindAvailableCarsController";
import { Router } from "express";
import multer from "multer";
import { ensureAdmin } from "../middlewares/ensureAdmin";
import { ensureAuthenticate } from "../middlewares/ensureAuthenticate";
import configUpload from '../../../../config/upload'
import { UploadCarImagesController } from "@modules/cars/useCases/uploadsCarImages/UploadCarImagesController";

const carRoutes = Router();
const uploadAvatar = multer(configUpload.upload('cars'));

const createCarsController = new CreateCarsController();
const findAvailableCarsController = new FindAvailableCarsController();
const createCarSpecificationController = new CreateCarSpecificationController();
const uploadCarImagesController = new UploadCarImagesController();
carRoutes.get('/available', findAvailableCarsController.handle);

carRoutes.use(ensureAuthenticate);
carRoutes.use(ensureAdmin);
carRoutes.post('/', createCarsController.handle);
carRoutes.patch('/specifications/:id', createCarSpecificationController.handle);
carRoutes.post('/images/:id',uploadAvatar.array('images'), uploadCarImagesController.handle)

export {carRoutes}