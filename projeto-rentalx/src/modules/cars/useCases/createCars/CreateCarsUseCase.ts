import { ICarsRepository } from "@modules/cars/repositories/ICarsRepository";
import { inject, injectable } from "tsyringe";
interface IRequestCreateCar{
  name: string;
  description: string;
  daily_rate: number;
  license_plate: string;
  fine_amount: number;
  brand: string ;
  category: string;
}

@injectable()
export class CreateCarsUseCase {
  constructor(@inject('CarsRepository') private carsRepository: ICarsRepository){}
  async execute({
    brand,
    category,
    daily_rate,
    description,
    fine_amount,
    license_plate,
    name
  }:IRequestCreateCar){
    await this.carsRepository.create({
      brand,
      category,
      daily_rate,
      description,
      fine_amount,
      license_plate,
      name
    })
  }
}