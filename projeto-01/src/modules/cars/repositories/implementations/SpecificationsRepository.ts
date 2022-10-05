import {v4 as uuidv4} from 'uuid'
import { Specification } from "../../models/Specification";
import { ICreateSpecificationDTO, ISpacificationsRepository } from "../ISpecificationsRepository";

export class SpecificationsRepository implements ISpacificationsRepository{
  private specifications: Specification[]
  
  constructor(){
    this.specifications = []
  }
  create({ name, description }: ICreateSpecificationDTO) { 
    const specification = new Specification()
    Object.assign(specification, {
      id: uuidv4() ,
      name,
      description,
      createAt: new Date()
    })

    this.specifications.push(specification)
  };
  findByName(name: string){
    const specification = this.specifications.find(
      specification => specification.name === name
    )

    return specification
  };
  all(){
    return this.specifications
  };

}