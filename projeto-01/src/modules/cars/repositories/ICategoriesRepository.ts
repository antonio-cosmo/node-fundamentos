import { Category } from "../models/Category"

export interface ICreateCategoryDTO{
  name: string
  description: string
}

export interface ICategoriesRepository {

  create: ({name, description}:ICreateCategoryDTO) => void
  
  findByName: (name: string)=> Category

  all: () => Category[]
}