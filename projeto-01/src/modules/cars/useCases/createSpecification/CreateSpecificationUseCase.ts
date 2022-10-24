import { inject, injectable } from "tsyringe"
import { ISpecificationsRepository } from "../../repositories/ISpecificationsRepository"

interface IRequest{
  name: string
  description: string
}
@injectable()
export class CreateSpecificationUseCase{
  constructor(@inject('SpecificationsRepository') private specificationsRepository: ISpecificationsRepository){}
  execute({name, description}:IRequest){
    const specificationExist = this.specificationsRepository.findByName(name)
    if(specificationExist){
      throw new Error('Especificação ja existe')
    } 
    this.specificationsRepository.create({name, description})
  }
}