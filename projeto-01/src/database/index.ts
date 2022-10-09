import {DataSource} from 'typeorm'

export const AppDataSource = new DataSource({
    type: "postgres",
    host: "database",
    port: 5432,
    username: "docker",
    password: "docker",
    database: "database_rentx",
})


