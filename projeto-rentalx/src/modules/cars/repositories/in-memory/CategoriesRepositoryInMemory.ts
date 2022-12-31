import { Category } from "../../entities/Category";
import { ICategoriesRepository, ICreateCategoryDTO } from "../ICategoriesRepository";

export class CategoriesRepositoryInMemory implements ICategoriesRepository{

  private category: Category[] = [];


  async create({ name, description }: ICreateCategoryDTO){
    const category = new Category();

    Object.assign(category, {
      name,
      description,
      createdAt: new Date()
    })

    this.category.push(category)
  };
  async findByName(name: string){
    const category = this.category.find(category => category.name === name);

    return category;
  };
  async all(){
    const list = this.category;

    return list;
  };
  async delete(name: string){
    const indexCategory = this.category.findIndex(category => category.name === name);

    if(indexCategory >= 0){
      this.category.splice(indexCategory, 1)
    }
  };

}