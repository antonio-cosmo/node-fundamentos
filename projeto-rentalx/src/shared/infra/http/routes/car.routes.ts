import { CreateCarsController } from "@modules/cars/useCases/createCars/CreateCarsController";
import { FindAvailableCarsController } from "@modules/cars/useCases/listCars/FindAvailableCarsController";
import { Router } from "express";
import { ensureAdmin } from "../middlewares/ensureAdmin";
import { ensureAuthenticate } from "../middlewares/ensureAuthenticate";

const carRoutes = Router();
const createCarsController = new CreateCarsController();
const findAvailableCarsController = new FindAvailableCarsController();

carRoutes.get('/available', findAvailableCarsController.handle);

carRoutes.use(ensureAuthenticate);
carRoutes.use(ensureAdmin);
carRoutes.post('/', createCarsController.handle);

export {carRoutes}