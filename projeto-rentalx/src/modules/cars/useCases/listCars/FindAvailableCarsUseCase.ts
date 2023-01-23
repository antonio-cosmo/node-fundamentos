import { ICarsRepository } from "@modules/cars/repositories/ICarsRepository";
import { inject, injectable } from "tsyringe";

@injectable()
export class FindAvailableCarsUseCase{
  constructor(@inject('CarsRepository') private carsRepository: ICarsRepository){};

  async execute(name?: string, brand?: string, category_id?:string){
    const car = await this.carsRepository.findAvailableCars(name, brand, category_id);

    return car;
  }
}