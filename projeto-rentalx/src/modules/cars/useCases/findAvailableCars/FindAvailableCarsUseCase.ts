import { ICarsRepository } from "@modules/cars/repositories/ICarsRepository";
import { inject, injectable } from "tsyringe";

interface IRequest{
  name?: string, 
  brand?: string, 
  category_id?:string
}
@injectable()
export class FindAvailableCarsUseCase{
  constructor(@inject('CarsRepository') private carsRepository: ICarsRepository){};

  async execute({brand, category_id, name}: IRequest){
    const car = await this.carsRepository.findAvailableCars({name, brand, category_id});

    return car;
  }
}