import { Specification } from './../infra/typeorm/entities/Specification';
import { Car } from '../infra/typeorm/entities/Car';
import { ICreateCarsDto } from './../dto/ICreateCarsDto';

export interface FindAvailableCarsRequest{
  name?: string, 
  brand?: string, 
  category_id?:string
}

interface IUpdate{
 car: Car
}

export interface ICarsRepository {
  create: (data: ICreateCarsDto) => Promise<Car>;
  findByLicensePlate:(license: string) => Promise<Car>;
  findAvailableCars: ({name, brand, category_id}: FindAvailableCarsRequest) => Promise<Car[]>;
  findById:(id: string) => Promise<Car>
  update:({car}:IUpdate) => Promise<Car>

}