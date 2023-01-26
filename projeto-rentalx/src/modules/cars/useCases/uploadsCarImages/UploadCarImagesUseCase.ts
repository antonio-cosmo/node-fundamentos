import { ICarImagesRepository } from '@modules/cars/repositories/ICarsImagesRepository';
import { inject, injectable } from "tsyringe";
interface IRequest{
  car_id: string,
  path_images: string[]
}
@injectable()
export class UploadCarImagesUseCase{
  constructor(@inject('CarImagesRepository') private carImagesRepository: ICarImagesRepository){}
  async execute({car_id, path_images}:IRequest){
   path_images.map(async path => {
     await this.carImagesRepository.create({car_id, path_image: path})
    } )

  }
}