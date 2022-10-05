import { Request, Response } from 'express';
import { ListSpecificationUseCase } from './ListSpecificationUseCase';

export class ListSpecificationController{
    constructor(private listSpecificationUseCase: ListSpecificationUseCase){}
    handle(request: Request, response: Response){
        const listSpecification = this.listSpecificationUseCase.execute()

        return response.status(200).json(listSpecification)
    }
}