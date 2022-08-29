import { ICategoriesRepository } from '../../repositories/ICategoriesRepository';

interface IRequest{
  name: string
  description: string
}

export class CreateCategoryUseCase{
  constructor(private categoriesRepository: ICategoriesRepository){}
  execute({name, description}:IRequest){
    const categoryExist = this.categoriesRepository.findByName(name)
    if(categoryExist){
      throw new Error('Categoria ja existe')
    } 
    this.categoriesRepository.create({name, description})

  }
}