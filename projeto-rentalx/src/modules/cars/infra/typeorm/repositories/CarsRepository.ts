import { ICreateCarsDto } from "@modules/cars/dto/ICreateCarsDto";
import { ICarsRepository } from "@modules/cars/repositories/ICarsRepository";
import { dataSource } from "@shared/infra/typeorm/database/data-source";
import { Repository } from 'typeorm'
import { Car } from "../entities/Car";
export class CarsRepository implements ICarsRepository {
  private repository: Repository<Car>;

  constructor(){
    this.repository = dataSource.getRepository(Car)
  }

  async create({brand,category,daily_rate,description,fine_amount,license_plate,name}:ICreateCarsDto){


    const car = this.repository.create({
      brand,
      daily_rate,
      description,
      fine_amount,
      license_plate,
      name,
      category_id: category,
      category: {id: category}
    });


    await this.repository.save(car)
  }

  async findByLicensePlate(plate: string){
    const car = await this.repository.findOne({
      where:{
        license_plate: plate
      }
    })

    return car
  };

  async findAvailableCars(name?: string, brand?: string, category_id?:string){

    const carsQuery = this.repository.createQueryBuilder('c')
    .where("available = :available",{available: true})
    
    
    if(category_id){
      carsQuery.andWhere('category_id = :category_id',{category_id})
    }
    if(name){
      carsQuery.andWhere("name = :name", {name})
    }

    if(brand){
      carsQuery.andWhere("brand = :brand", {brand})
    }

    const cars = await carsQuery.getMany();
    return cars
  }

}