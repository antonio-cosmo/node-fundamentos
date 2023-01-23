import {Entity, Column, PrimaryColumn, CreateDateColumn, ManyToOne, JoinColumn} from 'typeorm'
import { v4 as uuidv4 } from 'uuid';
import { Category } from './Category';

@Entity('cars')
class Car {

  @PrimaryColumn({type:'uuid'})
  id?: string;

  @Column({type: 'varchar'})
  name: string;

  @Column({type: 'varchar'})
  description: string;

  @Column({type: 'int'})
  daily_rate: number;

  @Column({type:'boolean', default:true})
  available?: boolean;

  @Column({type: 'varchar', unique: true})
  license_plate: string;
  
  @Column({type: 'int'})
  fine_amount: number;

  @Column({type: 'varchar'})
  brand: string ;

  @ManyToOne(() => Category)
  @JoinColumn({name: ' category'})
  category: Category;

  @Column({type: 'varchar'})
  category_id: string

  @CreateDateColumn({type:'timestamp', default: 'now()'})
  created_at?: Date;

  constructor(){
    if(!this.id) {
      this.id = uuidv4();
    };
  }
}

export{Car}