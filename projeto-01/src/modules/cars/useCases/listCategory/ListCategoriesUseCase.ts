import { ICategoriesRepository } from './../../repositories/ICategoriesRepository';

export class ListCategoriesUseCase{

  constructor(private categoryRepository: ICategoriesRepository){}
  
  async execute(){
    const listCategories = await this.categoryRepository.all()

    return listCategories
  }
}