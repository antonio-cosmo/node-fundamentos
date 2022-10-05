import { Category } from "../../models/Category";
import { ICategoriesRepository,ICreateCategoryDTO } from "../ICategoriesRepository";

// singleton

class CategoriesRepository implements ICategoriesRepository {

  private categories: Category[]

  private static INSTANCE: CategoriesRepository

  private constructor(){
    this.categories = []
  }

  static getInstance(){
    if(!CategoriesRepository.INSTANCE){
      CategoriesRepository.INSTANCE = new CategoriesRepository()
    }

    return CategoriesRepository.INSTANCE
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