import { ICarsRepository } from "@modules/cars/repositories/ICarsRepository";
import { ISpecificationsRepository } from "@modules/cars/repositories/ISpecificationsRepository";
import { AppError } from "@shared/AppError";
import { inject, injectable } from "tsyringe";

interface IRequest{
  car_id: string,
  specifications_id: string[]
}
@injectable()
export class CreateCarSpecification{
  constructor(
    @inject('CarsRepository') private carsRepository: ICarsRepository,
    @inject('SpecificationsRepository') private specificationsRepository: ISpecificationsRepository
  ){}

  async execute({car_id, specifications_id}:IRequest){
    const carExists = await this.carsRepository.findById(car_id);

    if(!carExists) throw new AppError("Car does exists")

    carExists.specifications = await this.specificationsRepository.findByIds(specifications_id);

    const carUpdate = await this.carsRepository.update({car: carExists})

    return carUpdate
  }
}