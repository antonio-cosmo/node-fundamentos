import { ICarsRepository } from "@modules/cars/repositories/ICarsRepository";
import { AppError } from "@shared/AppError";
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

    const carAlreadyExist = await this.carsRepository.findByLicensePlate(license_plate);

    if(carAlreadyExist) throw new AppError('Cars already exist');
    
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