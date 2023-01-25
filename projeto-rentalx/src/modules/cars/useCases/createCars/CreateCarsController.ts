import { Request, Response } from "express";
import { container } from "tsyringe";
import { CreateCarsUseCase } from "./CreateCarsUseCase";

export class CreateCarsController{
  async handle(req: Request, res: Response){
    const {
      brand,
      category_id,
      daily_rate,
      description,
      fine_amount,
      license_plate,
      name,
    } = req.body
    const createCarsUsecase = container.resolve(CreateCarsUseCase);
    await createCarsUsecase.execute({
      brand,
      category_id,
      daily_rate,
      description,
      fine_amount,
      license_plate,
      name,
    });

    return res.status(201).json({message: "Car created"})

  }
}