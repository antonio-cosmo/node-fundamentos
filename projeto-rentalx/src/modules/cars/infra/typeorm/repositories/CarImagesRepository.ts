import { ICarImagesRepository, CreateCarImagesDTO } from '@modules/cars/repositories/ICarsImagesRepository';
import { dataSource } from '@shared/infra/typeorm/database/data-source';
import { Repository } from 'typeorm';
import { CarImage } from '../entities/CarImage';
export class CarImagesRepository implements ICarImagesRepository{
  private readonly repository: Repository<CarImage>
  constructor(){
    this.repository = dataSource.getRepository(CarImage);
  }
  async create({car_id, path_image}: CreateCarImagesDTO){
    const carImage = this.repository.create({
      car_id,
      path: path_image
    })

    await this.repository.save(carImage);
  }
}