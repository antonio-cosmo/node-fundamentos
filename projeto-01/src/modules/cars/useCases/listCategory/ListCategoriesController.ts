import { Request, Response } from "express";
import { container } from "tsyringe";
import { ListCategoriesUseCase } from "./ListCategoriesUseCase";

export class ListCategoriesController{

  async handle(resquest: Request, response: Response ){
    const listCategoriesUseCase = container.resolve(ListCategoriesUseCase)
    const listCategories = await listCategoriesUseCase.execute()

    return response.status(200).json(listCategories)
    
  }
}