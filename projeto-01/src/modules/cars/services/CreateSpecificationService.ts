import { ISpacificationsRepository } from "../repositories/ISpecificationsRepository"

interface IRequest{
  name: string
  description: string
}

export class CreateSpecificationService{
  constructor(private specificationsRepository: ISpacificationsRepository){}
  execute({name, description}:IRequest){
    const specificationExist = this.specificationsRepository.findByName(name)
    if(specificationExist){
      throw new Error('Especificação ja existe')
    } 
    this.specificationsRepository.create({name, description})
  }
}