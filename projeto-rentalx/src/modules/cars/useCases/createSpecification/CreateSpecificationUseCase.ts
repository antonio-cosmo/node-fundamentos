import { inject, injectable } from "tsyringe"
import { ISpecificationsRepository } from "../../repositories/ISpecificationsRepository"

interface IRequest{
  name: string
  description: string
}
@injectable()
export class CreateSpecificationUseCase{
  constructor(@inject('SpecificationsRepository') private specificationsRepository: ISpecificationsRepository){}
  
  async execute({name, description}:IRequest){
    const specificationExist = await this.specificationsRepository.findByName(name)
    if(specificationExist){
      throw new Error('Especificação ja existe')
    } 
    await this.specificationsRepository.create({name, description})
  }
}