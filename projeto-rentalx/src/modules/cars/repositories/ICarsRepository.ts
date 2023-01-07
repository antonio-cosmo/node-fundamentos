import { Car } from '../infra/typeorm/entities/Car';
import { ICreateCarDto } from './../dto/ICreateCarsDto';
export interface ICarsRepository {
  create: (data: ICreateCarDto) => Promise<void>;
  findLicencePlate:(plate: string) => Promise<Car>
}