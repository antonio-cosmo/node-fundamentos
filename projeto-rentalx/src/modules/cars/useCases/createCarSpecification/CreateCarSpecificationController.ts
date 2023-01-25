import { Request, Response } from "express";
import { container } from "tsyringe";
import { CreateCarSpecification } from "./CreateCarSpecification";

export class CreateCarSpecificationController{
  async handle(req:Request, res:Response){
    const {car_id, specifications_id} = req.body;

    const createCarSpecificationUseCase = container.resolve(CreateCarSpecification);

    const carUpdate = await createCarSpecificationUseCase.execute({car_id, specifications_id});

    return res.status(200).json(carUpdate);
  }
}