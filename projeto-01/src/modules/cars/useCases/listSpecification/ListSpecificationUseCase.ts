import { inject, injectable } from "tsyringe";
import { ISpecificationsRepository } from "../../repositories/ISpecificationsRepository";

@injectable()
export class ListSpecificationUseCase{
    constructor(@inject('SpecificationsRepository') private listSpecificationRepository: ISpecificationsRepository){}
    execute(){
        return this.listSpecificationRepository.all()
    }
}