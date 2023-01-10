import {DataSource, DataSourceOptions} from 'typeorm'


const configStorge:DataSourceOptions = {
    type: "postgres",
    host: "db_rentalX",
    port: 5432,
    username: "docker",
    password: "docker",
    database: "db_rentalx",
    entities: ["./src/modules/**/infra/typeorm/entities/*.ts"],
    migrations:["./src/shared/infra/typeorm/database/migrations/*.ts"],
}
export const dataSource = new DataSource(configStorge)


