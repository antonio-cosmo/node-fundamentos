import { v4 as uuidv4 } from 'uuid';
import {Column, Entity, CreateDateColumn, PrimaryColumn} from 'typeorm'

@Entity('categories')
class Category {
  @PrimaryColumn({type:'uuid'})
  id?:string 

  @Column({type: 'varchar'})
  name: string

  @Column({type: 'varchar'}) 
  description: string 

  @CreateDateColumn({type: 'timestamp'})
  createdAt: Date 

  constructor(){
    if(!this.id){
      this.id = uuidv4()
    } 
  }
}

export { Category }