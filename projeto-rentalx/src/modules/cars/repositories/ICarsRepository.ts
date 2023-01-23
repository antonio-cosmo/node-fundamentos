import { Car } from '../infra/typeorm/entities/Car';
import { ICreateCarsDto } from './../dto/ICreateCarsDto';



interface NovoCar{
  
    id: string,
    name: string,
    description: string,
    daily_rate: number,
    available: boolean,
    license_plate: string,
    fine_amount: number,
    brand: string,
    created_at: Date,
    category: {
      name?: string
    }
  
}
export interface ICarsRepository {
  create: (data: ICreateCarsDto) => Promise<void>;
  findByLicensePlate:(license: string) => Promise<Car>;
  findAvailableCars: (name?: string, brand?: string, category_id?:string) => Promise<Car[]>;
  // findAvailableCars: (name?: string, brand?: string, category_id?:string) => Promise<NovoCar[]>;

}