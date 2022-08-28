import { Category } from "../models/Category";
import { ICategoriesRepository,ICreateCategoryDTO } from "./ICategoriesRepository";



class CategoriesRepository implements ICategoriesRepository {
  private categories: Category[]

  constructor(){
    this.categories = []
  }

  create({name, description}:ICreateCategoryDTO){
    const category = new Category()
    
    Object.assign(category, {
      name,
      description,
      createAt: new Date
    })

    this.categories.push(category)
  }

  findByName(name: string){
    const category = this.categories.find(value=> value.name === name)

    return category
  }

  all(){
    return this.categories
  }
}

export {CategoriesRepository}