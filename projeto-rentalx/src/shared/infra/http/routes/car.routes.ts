import { CreateCarsController } from "@modules/cars/useCases/createCars/CreateCarsController";
import { ListCarController } from "@modules/cars/useCases/listCars/ListCarController";
import { Router } from "express";
import { ensureAdmin } from "../middlewares/ensureAdmin";
import { ensureAuthenticate } from "../middlewares/ensureAuthenticate";

const carRoutes = Router();
const createCarsController = new CreateCarsController();
const listCarController = new ListCarController();

carRoutes.get('/', listCarController.handle);

carRoutes.use(ensureAuthenticate);
carRoutes.use(ensureAdmin);
carRoutes.post('/', createCarsController.handle);

export {carRoutes}