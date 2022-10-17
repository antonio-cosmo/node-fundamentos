import { ICategoriesRepository } from '../../repositories/ICategoriesRepository';

interface IRequest{
  name: string
  description: string
}

export class CreateCategoryUseCase{
  constructor(private categoriesRepository: ICategoriesRepository){}
  async execute({name, description}:IRequest){
    const categoryExist = await this.categoriesRepository.findByName(name)
    if(categoryExist){
      throw new Error('Categoria ja existe')
    } 
    await this.categoriesRepository.create({name, description})

  }
}