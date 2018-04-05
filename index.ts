import { createConnection, Entity, PrimaryGeneratedColumn } from 'typeorm'

@Entity()
export class SampleEntity {
  @PrimaryGeneratedColumn()
  public id: string
}

createConnection({
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'root', // ###
  password: 'password', // ###
  database: 'pgdb', // ###
  synchronize: true,
  logging: true,
  schema: 'sampleschema',
  entities: [ SampleEntity ]
})