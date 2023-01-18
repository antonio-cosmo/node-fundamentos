import { container } from 'tsyringe';
import { Request, Response } from "express";
import { ListCarUseCase } from './ListCarUseCase';

export class ListCarController{
  async handle(req: Request, res: Response){

    const listCarUsecase = container.resolve(ListCarUseCase);

    const car = await listCarUsecase.execute();

    return res.status(200).json(car);
  }
}