import { Request, Response } from 'express';
import { container } from 'tsyringe';
import { ListSpecificationUseCase } from './ListSpecificationUseCase';

export class ListSpecificationController{
    handle(request: Request, response: Response){
        const listSpecificationUseCase = container.resolve(ListSpecificationUseCase)
        const listSpecification = listSpecificationUseCase.execute()

        return response.status(200).json(listSpecification)
    }
}