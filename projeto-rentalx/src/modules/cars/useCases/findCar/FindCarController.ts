import { container } from 'tsyringe';
import { Request, Response } from "express";
import { FindCarUseCase } from './FindCarUseCase';

export class FindCarController{
  async handle(req: Request, res: Response){

    const findCarUsecase = container.resolve(FindCarUseCase);

    const car = await findCarUsecase.execute();

    return res.status(200).json(car);
  }
}