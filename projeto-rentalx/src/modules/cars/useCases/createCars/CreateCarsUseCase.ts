import { ICarsRepository } from "@modules/cars/repositories/ICarsRepository";
import { ICategoriesRepository } from "@modules/cars/repositories/ICategoriesRepository";
import { AppError } from "@shared/AppError";
import { inject, injectable } from "tsyringe";
interface IRequestCreateCar{
  name: string;
  description: string;
  daily_rate: number;
  license_plate: string;
  fine_amount: number;
  brand: string ;
  category_id: string;
}

@injectable()
export class CreateCarsUseCase {
  constructor(
    @inject('CarsRepository') private carsRepository: ICarsRepository,
    @inject('CategoriesRepository') private categoriesRepository: ICategoriesRepository
  ){}
  async execute({
    brand,
    category_id,
    daily_rate,
    description,
    fine_amount,
    license_plate,
    name,
  }:IRequestCreateCar){

    const carAlreadyExist = await this.carsRepository.findByLicensePlate(license_plate);

    if(carAlreadyExist) throw new AppError('Cars already exist');
    
    const car = await this.carsRepository.create({
      brand,
      category_id,
      daily_rate,
      description,
      fine_amount,
      license_plate,
      name,
    })

    return car
    
  }
}