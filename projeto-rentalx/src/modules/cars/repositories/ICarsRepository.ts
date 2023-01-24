import { Car } from '../infra/typeorm/entities/Car';
import { ICreateCarsDto } from './../dto/ICreateCarsDto';

export interface FindAvailableCrasRequest{
  name?: string, 
  brand?: string, 
  category_id?:string
}

export interface ICarsRepository {
  create: (data: ICreateCarsDto) => Promise<void>;
  findByLicensePlate:(license: string) => Promise<Car>;
  findAvailableCars: ({name, brand, category_id}: FindAvailableCrasRequest) => Promise<Car[]>;
  // findAvailableCars: (name?: string, brand?: string, category_id?:string) => Promise<NovoCar[]>;

}