import { CreateCategoryUseCase } from './CreateCategoryUseCase';
import { Request, Response } from "express";

export class CreateCategoryController{

  constructor(private createCategoryUseCase: CreateCategoryUseCase ){}
  
  async handle(request: Request, response:Response){
    const {name, description} = request.body
    try{
      await this.createCategoryUseCase.execute({name, description})
      return response.status(201).send()
    }catch(e){
      if(e instanceof Error) return response.status(200).send(e.message)
      
      return response.send(e)
    }
    
  }
}