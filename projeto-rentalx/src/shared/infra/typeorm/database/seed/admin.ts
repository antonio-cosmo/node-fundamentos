import { dataSource } from "../data-source";
import {v4 as uuidV4} from 'uuid';
import { hash } from "bcrypt";


async function create(){


  const id = uuidV4();
  const password = await hash('admin',8);

  await dataSource.initialize();

  await dataSource.query(`
    INSERT INTO users(id, name, email, password, "isAdmin", driver_licenses)
    VALUES('${id}', 'admin', 'admin@email.com', '${password}', true, 'ADC-76567A')
  `)

  await dataSource.destroy();
}

create().then(()=>{
  console.log('User admin created')
})