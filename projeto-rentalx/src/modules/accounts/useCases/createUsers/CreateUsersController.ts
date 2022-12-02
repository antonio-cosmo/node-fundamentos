import { ICreateUserDto } from './../../dto/ICreateUserDto';
import { Request, Response } from "express";
import { container } from 'tsyringe';
import { CreateUsersUseCase } from './CreateUsersUseCase';
export interface IRequest extends ICreateUserDto{}

export class CreateUsersController{
    async handle(req:Request, res:Response){
        const {name, email, password, driver_licenses}:IRequest= req.body
        
        const createUsersUseCase = container.resolve(CreateUsersUseCase);
       
        await createUsersUseCase.execute({name, email, password, driver_licenses});
       

        return res.status(201).json({message: 'Usuario criado'})



    }
}