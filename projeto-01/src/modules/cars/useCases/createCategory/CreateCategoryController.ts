import { CreateCategoryUseCase } from './CreateCategoryUseCase';
import { Request, Response } from "express";

export class CreateCategoryController{

  constructor(private createCategoryUseCase: CreateCategoryUseCase ){}
  
  handle(request: Request, response:Response){
    const {name, description} = request.body
    try{
      this.createCategoryUseCase.execute({name, description})
      return response.status(201).send()
    }catch(e){
      if(e instanceof Error) return response.send(e.message)
      
      return response.send(e)
    }
    
  }
}