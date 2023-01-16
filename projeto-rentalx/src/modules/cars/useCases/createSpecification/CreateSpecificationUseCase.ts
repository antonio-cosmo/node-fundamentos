
import { ISpecificationsRepository } from "@modules/cars/repositories/ISpecificationsRepository"
import { AppError } from "@shared/AppError"
import { inject, injectable } from "tsyringe"


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
      throw new AppError('Especification exist', 400)
    } 
    await this.specificationsRepository.create({name, description})
  }
}