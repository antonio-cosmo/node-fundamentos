import { Column, CreateDateColumn, Entity, PrimaryColumn } from 'typeorm';
import { v4 as uuidv4 } from 'uuid';

@Entity('specifications')
export class Specification{
  @PrimaryColumn({type:'uuid'})
  id?:string 

  @Column({type: 'varchar'})
  name: string 
  
  @Column({type: 'varchar'})
  description: string 
  
  @CreateDateColumn({type: 'timestamp', default: 'now()'})
  createdAt: Date 

  constructor(){
    if(!this.id){
      this.id = uuidv4()
    }
  }
}