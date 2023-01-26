import { container } from 'tsyringe';
import { Request, Response } from "express";
import { FindAvailableCarsUseCase } from './FindAvailableCarsUseCase';

export class FindAvailableCarsController{
  async handle(req: Request, res: Response){

    const {name, brand, category_id} = req.query;

    const findAvailableCarsUseCase = container.resolve(FindAvailableCarsUseCase);

    const car = await findAvailableCarsUseCase.execute({
      brand: brand as string,
      name: name as string,
      category_id: category_id as string
    });

    return res.status(200).json(car);
  }
}