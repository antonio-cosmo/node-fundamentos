import { CreateCarsController } from "@modules/cars/useCases/createCars/CreateCarsController";
import { CreateCarSpecificationController } from "@modules/cars/useCases/createCarSpecification/CreateCarSpecificationController";
import { FindAvailableCarsController } from "@modules/cars/useCases/findAvailableCars/FindAvailableCarsController";
import { Router } from "express";
import { ensureAdmin } from "../middlewares/ensureAdmin";
import { ensureAuthenticate } from "../middlewares/ensureAuthenticate";

const carRoutes = Router();
const createCarsController = new CreateCarsController();
const findAvailableCarsController = new FindAvailableCarsController();
const createCarSpecificationController = new CreateCarSpecificationController();
carRoutes.get('/available', findAvailableCarsController.handle);

carRoutes.use(ensureAuthenticate);
carRoutes.use(ensureAdmin);
carRoutes.post('/', createCarsController.handle);
carRoutes.patch('/specifications', createCarSpecificationController.handle);

export {carRoutes}