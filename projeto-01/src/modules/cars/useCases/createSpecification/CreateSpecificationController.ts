import { CreateSpecificationUseCase } from "./CreateSpecificationUseCase";
import { Request, Response } from "express";

export class CreateSpecificationController{

  constructor(private createSpecificationUseCase: CreateSpecificationUseCase){}
  
  handle(request: Request, response:Response){
    const {name, description} = request.body
    try{
      this.createSpecificationUseCase.execute({name, description})
      return response.status(201).send()
    }catch(e){
      if(e instanceof Error) return response.send(e.message)
      
      return response.send(e)
      
    }

  }
}