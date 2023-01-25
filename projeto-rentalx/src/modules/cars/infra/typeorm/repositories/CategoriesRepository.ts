import { ICategoriesRepository, ICreateCategoryDTO } from '@modules/cars/repositories/ICategoriesRepository';
import { dataSource } from '@shared/infra/typeorm/database/data-source';
import {Repository} from 'typeorm'
import { Category } from "../entities/Category";

class CategoriesRepository implements ICategoriesRepository {

  private repository: Repository<Category>

  constructor(){
    this.repository = dataSource.getRepository(Category)
  }

  async create({name, description}:ICreateCategoryDTO){
    const category = this.repository.create({
      name,
      description
    })
    await this.repository.save(category)
  }

  async findByName(name: string){
    const category = await this.repository.findOne({
      where:{
        name
      }
    })

    return category
  }
  async findById(id: string){
    return this.repository.findOne({where:{
      id
    }})
  }
  async all(){
    const categories = await this.repository.find()

    return categories
  }

  async delete(name: string){
    await this.repository.delete({
      name
    })
  }
}

export {CategoriesRepository}