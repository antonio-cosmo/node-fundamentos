import { CarImage } from "../infra/typeorm/entities/CarImage";

export interface CreateCarImagesDTO{
  car_id: string,
  path_image: string
}
export class  ICarImagesRepository{
  create:({car_id, path_image}: CreateCarImagesDTO)=> Promise<void>
}