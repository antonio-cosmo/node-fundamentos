import { CreateCategoryUseCase } from './CreateCategoryUseCase';
import { Request, Response } from "express";
import { container } from 'tsyringe';

export class CreateCategoryController{
  
  async handle(request: Request, response:Response){
    const {name, description} = request.body
    const createCategoryUseCase = container.resolve(CreateCategoryUseCase)
  
    await createCategoryUseCase.execute({name, description})
    return response.status(201).json({message: 'Category create'})
    
    
  }
}