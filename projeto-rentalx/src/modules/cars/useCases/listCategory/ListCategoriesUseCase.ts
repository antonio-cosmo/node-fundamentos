import { inject, injectable } from 'tsyringe';
import { ICategoriesRepository } from './../../repositories/ICategoriesRepository';

@injectable()
export class ListCategoriesUseCase{

  constructor(@inject('CategoriesRepository') private categoryRepository: ICategoriesRepository){}
  
  async execute(){
    const listCategories = await this.categoryRepository.all()

    return listCategories
  }
}