import { CreateCategoryUseCase } from './CreateCategoryUseCase';
import { Request, Response } from "express";
import { container } from 'tsyringe';

export class CreateCategoryController{
  
  async handle(request: Request, response:Response){
    const {name, description} = request.body
    const createCategoryUseCase = container.resolve(CreateCategoryUseCase)
    try{
      await createCategoryUseCase.execute({name, description})
      return response.status(201).send()
    }catch(e){
      if(e instanceof Error) return response.status(200).send(e.message)
      
      return response.send(e)
    }
    
  }
}