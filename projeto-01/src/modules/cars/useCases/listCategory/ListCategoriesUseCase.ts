import { ICategoriesRepository } from './../../repositories/ICategoriesRepository';

export class ListCategoriesUseCase{

  constructor(private categoryRepository: ICategoriesRepository){}
  
  execute(){
    const listCategories = this.categoryRepository.all()

    return listCategories
  }
}