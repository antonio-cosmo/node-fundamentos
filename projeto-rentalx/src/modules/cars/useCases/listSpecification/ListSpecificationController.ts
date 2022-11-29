import { Request, Response } from 'express';
import { container } from 'tsyringe';
import { ListSpecificationUseCase } from './ListSpecificationUseCase';

export class ListSpecificationController{
    async handle(request: Request, response: Response){
        const listSpecificationUseCase = container.resolve(ListSpecificationUseCase)
        
        const listSpecification = await listSpecificationUseCase.execute()

        return response.status(200).json(listSpecification)
    }
}