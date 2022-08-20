import { Category } from "../models/category";

interface ICategoryDataDTO{
  name: string
  description: string
}

class CategoriesRepository{
  static categories: Category[] = []

  static create({name, description}:ICategoryDataDTO){
    const category = new Category()
    
    Object.assign(category, {
      name,
      description,
      createAt: new Date
    })

    CategoriesRepository.categories.push(category)
  }

  static all(){
    return CategoriesRepository.categories
  }
}

export {CategoriesRepository}