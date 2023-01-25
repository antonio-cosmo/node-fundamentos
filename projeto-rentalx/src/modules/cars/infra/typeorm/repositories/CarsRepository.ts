import { ICreateCarsDto } from "@modules/cars/dto/ICreateCarsDto";
import { FindAvailableCarsRequest, ICarsRepository } from "@modules/cars/repositories/ICarsRepository";
import { dataSource } from "@shared/infra/typeorm/database/data-source";
import { Repository } from 'typeorm'
import { Car } from "../entities/Car";

interface IUpdate{
  car: Car
}
export class CarsRepository implements ICarsRepository {
  private repository: Repository<Car>;

  constructor(){
    this.repository = dataSource.getRepository(Car)
  }

  async create({brand,category_id,daily_rate,description,fine_amount,license_plate,name,category}:ICreateCarsDto){      

    const car = this.repository.create({
      brand,
      daily_rate,
      description,
      fine_amount,
      license_plate,
      name,
      category_id,
      category,
    });


    return await this.repository.save(car)

  }

  async update({car}:IUpdate){
    const carUpdate = await  this.repository.save(car)
    return carUpdate
  }

  async findByLicensePlate(plate: string){
    const car = await this.repository.findOne({
      where:{
        license_plate: plate
      }
    })

    return car
  };

  async findAvailableCars({brand, category_id, name}:FindAvailableCarsRequest){

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

  async findById(id: string){
    const car = await this.repository.findOne({where: {id}});
    return car
  }

}