import { ICreateCarsDto } from "@modules/cars/dto/ICreateCarsDto";
import { Car } from "@modules/cars/infra/typeorm/entities/Car";
import { ICarsRepository } from "../ICarsRepository";

export class CarsRepositoryInMemory implements ICarsRepository{
  private cars: Car[] = []
  async create({
    brand, 
    category, 
    daily_rate, 
    description, 
    fine_amount, 
    license_plate, 
    name
  }: ICreateCarsDto){
    const car = new Car();

    Object.assign(car, {
      brand, 
      category, 
      daily_rate, 
      description, 
      fine_amount, 
      license_plate, 
      name,
      available: false,
      created_at: new Date()
    });

    this.cars.push(car);
  };

  async findLicencePlate(plate: string){
    const car = this.cars.find(car => car.license_plate === plate);

    return car
  }

}