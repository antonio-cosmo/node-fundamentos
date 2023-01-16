import { CreateCarsController } from "@modules/cars/useCases/createCars/CreateCarsController";
import { FindCarController } from "@modules/cars/useCases/findCar/FindCarController";
import { Router } from "express";

const carRoutes = Router();
const createCarsController = new CreateCarsController();
const findCarController = new FindCarController();

carRoutes.post('/', createCarsController.handle);
carRoutes.get('/', findCarController.handle);

export {carRoutes}