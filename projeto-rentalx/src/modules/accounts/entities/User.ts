import { v4 as uuidv4 } from 'uuid';
import {Column, Entity, CreateDateColumn, PrimaryColumn} from 'typeorm'

@Entity('users')
export class User{    

    @PrimaryColumn({type:'uuid'})
    id?: string;

    @Column({type: 'varchar'})
    name: string;
    
    @Column({type: 'varchar', unique: true})
    email: string;
    
    @Column({type: 'varchar'})
    password: string;
    
    @Column({type: 'varchar'})
    driver_licenses: string
    
    @Column({type:'boolean'})
    isAdmin: boolean;

    @CreateDateColumn({type: 'timestamp', default: 'now()'})
    createdAt: Date ;
    
    constructor(){
        if(!this.id){
            this.id = uuidv4();
        }
    }

}