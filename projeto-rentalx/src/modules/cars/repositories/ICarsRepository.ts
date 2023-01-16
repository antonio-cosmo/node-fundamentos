import { Car } from '../infra/typeorm/entities/Car';
import { ICreateCarsDto } from './../dto/ICreateCarsDto';
export interface ICarsRepository {
  create: (data: ICreateCarsDto) => Promise<void>;
  findByLicensePlate:(license: string) => Promise<Car>
  all: () => Promise<Car[]>
}