import { DataSource } from 'typeorm'

const dataSource = new DataSource({
  type: "postgres",
  host: "localhost",
  port: 5432,
  username: "myuser",
  password: "mypassword",
  database: "mydatabase",
  entities: [
    "./src/modules/**/infra/typeorm/entities/*.ts"
  ],
  migrations: [
    "./src/database/migrations/*.ts"
  ],
  migrationsTableName: "migration_table"
})

dataSource.initialize()

export default dataSource
