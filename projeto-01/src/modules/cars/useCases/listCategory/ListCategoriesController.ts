import { Request, Response } from "express";
import { ListCategoriesUseCase } from "./ListCategoriesUseCase";

export class ListCategoriesController{

  constructor(private listaCategoriesUseCase: ListCategoriesUseCase){}

  async handle(resquest: Request, response: Response ){
    const listCategories = await this.listaCategoriesUseCase.execute()

    return response.status(200).json(listCategories)
    
  }
}