import { ICategoriesRepository } from '@modules/cars/repositories/ICategoriesRepository';
import { inject, injectable } from 'tsyringe';

@injectable()
export class ListCategoriesUseCase{

  constructor(@inject('CategoriesRepository') private categoryRepository: ICategoriesRepository){}
  
  async execute(){
    const listCategories = await this.categoryRepository.all()

    return listCategories
  }
}