import { ISpacificationsRepository } from './../../repositories/ISpecificationsRepository';
export class ListSpecificationUseCase{
    constructor(private listSpecificationRepository: ISpacificationsRepository){}
    execute(){
        return this.listSpecificationRepository.all()
    }
}