import { Request, Response } from "express";
import { container } from "tsyringe";
import { UploadCarImagesUseCase } from "./UploadCarImagesUseCase";

interface IFale{
  path: string
}
export class UploadCarImagesController{
  async handle(req: Request, res: Response){
    const {id} = req.params;
    const images = req.files as IFale[];
    
    const uploadCarImagesUseCase = container.resolve(UploadCarImagesUseCase);
    
    const imagesPath = images.map(image => image.path);
    
    await uploadCarImagesUseCase.execute({
      car_id: id, 
      path_images: imagesPath}
    );

    return res.status(201).send();
  }
}