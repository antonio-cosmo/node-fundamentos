import { inject, injectable } from "tsyringe";
import { ISpecificationsRepository } from "../../repositories/ISpecificationsRepository";

@injectable()
export class ListSpecificationUseCase{
    constructor(@inject('SpecificationsRepository') private listSpecificationRepository: ISpecificationsRepository){}
    async execute(){
        return await this.listSpecificationRepository.all()
    }
}