import { inject, injectable } from 'tsyringe';
import { ICategoriesRepository } from '../../repositories/ICategoriesRepository';

interface IRequest{
  name: string
  description: string
}
@injectable()
export class CreateCategoryUseCase{
  constructor(@inject('CategoriesRepository') private categoriesRepository: ICategoriesRepository){}
  async execute({name, description}:IRequest){
    const categoryExist = await this.categoriesRepository.findByName(name)
    if(categoryExist){
      throw new Error('Categoria ja existe')
    } 
    await this.categoriesRepository.create({name, description})

  }
}