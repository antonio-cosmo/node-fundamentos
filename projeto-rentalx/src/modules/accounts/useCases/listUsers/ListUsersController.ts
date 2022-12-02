import { container } from 'tsyringe';
import { Request, Response } from "express";
import { ListUsersUseCase } from './ListUsersUsersCase';

export class ListUsersController{
    async handle(req: Request, res:Response){
        const listUserUserCase = container.resolve(ListUsersUseCase);
        const listusers = await listUserUserCase.execute();

        return res.status(200).json(listusers);
    }
}