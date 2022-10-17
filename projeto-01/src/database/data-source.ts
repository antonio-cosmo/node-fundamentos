import {DataSource, DataSourceOptions} from 'typeorm'


const configStorge:DataSourceOptions = {
    type: "postgres",
    host: "database_rentx",
    port: 5432,
    username: "docker",
    password: "docker",
    database: "database_rentx",
    entities: ["./src/modules/cars/models/*ts"],
    migrations:["./src/database/migrations/*.ts"],
}
export const dataSource = new DataSource(configStorge)


