import { Car } from '../infra/typeorm/entities/Car';
import { ICreateCarsDto } from './../dto/ICreateCarsDto';
export interface ICarsRepository {
  create: (data: ICreateCarsDto) => Promise<void>;
  findLicencePlate:(plate: string) => Promise<Car>
}