import { ICreateCarsDto } from "@modules/cars/dto/ICreateCarsDto";
import { Car } from "@modules/cars/infra/typeorm/entities/Car";
import { FindAvailableCarsRequest, ICarsRepository } from "../ICarsRepository";

export class CarsRepositoryInMemory implements ICarsRepository{
  private cars: Car[] = [];

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
      daily_rate, 
      description, 
      fine_amount, 
      license_plate, 
      name,
      available: true,
      category_id: category,
      created_at: new Date()
    });

    this.cars.push(car);

    return car;
  };

  async findByLicensePlate(license: string){
    const car = this.cars.find(car => car.license_plate === license);

    return car
  }

  async findAvailableCars({name, brand, category_id}: FindAvailableCarsRequest){

    const availableTrue = this.cars.filter(car => car.available === true);

    const findByCars = availableTrue.filter(car => {
      if(
        (name && car.name === name) ||
        (brand && car.brand === brand) ||
        (category_id && car.category_id === category_id)
      ){
        return car;
      }

      return null
    })

    if(findByCars.length > 0){
      return findByCars
    }

    return availableTrue;
    
  }

  async findById(id: string){
    return this.cars.find(car => car.id === id);
  }
}