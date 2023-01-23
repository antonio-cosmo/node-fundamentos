import { v4 as uuidv4 } from 'uuid';
import {Column, Entity, CreateDateColumn, PrimaryColumn, OneToMany} from 'typeorm'
import { Car } from './Car';

@Entity('categories')
class Category {
  @PrimaryColumn({type:'uuid'})
  id?:string 

  @Column({type: 'varchar'})
  name: string

  @Column({type: 'varchar'}) 
  description: string 

  // @OneToMany(() => Car, (car) => car.category)
  // cars: Car[]

  @CreateDateColumn({type: 'timestamp', default: 'now()'})
  createdAt?: Date 

  constructor(){
    if(!this.id){
      this.id = uuidv4()
    } 
  }
}

export { Category }