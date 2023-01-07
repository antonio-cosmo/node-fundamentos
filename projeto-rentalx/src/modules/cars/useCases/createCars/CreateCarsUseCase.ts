import { ICarsRepository } from "@modules/cars/repositories/ICarsRepository";
interface IRequestCreateCar{
  name: string;
  description: string;
  daily_rate: number;
  license_plate: string;
  fine_amount: number;
  brand: string ;
  category_id: string;
}
export class CreateCarsUseCase {
  constructor(private carsRepository: ICarsRepository){}
  async execute({
    brand,
    category_id,
    daily_rate,
    description,
    fine_amount,
    license_plate,
    name
  }:IRequestCreateCar){
    await this.carsRepository.create({
      brand,
      category_id,
      daily_rate,
      description,
      fine_amount,
      license_plate,
      name
    })
  }
}