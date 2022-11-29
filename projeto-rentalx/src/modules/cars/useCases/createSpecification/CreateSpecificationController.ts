import { CreateSpecificationUseCase } from "./CreateSpecificationUseCase";
import { Request, Response } from "express";
import { container } from "tsyringe";

export class CreateSpecificationController{

  
  async handle(request: Request, response:Response){
    const {name, description} = request.body
    const createSpecificationUseCase = container.resolve(CreateSpecificationUseCase)
    try{
      await createSpecificationUseCase.execute({name, description})
      return response.status(201).send()
    }catch(e){
      if(e instanceof Error) return response.send(e.message)
      
      return response.send(e)
      
    }

  }
}