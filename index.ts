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
  username: '', // ### IMPORTANT - YOU NEED TO SET THIS ###
  password: '', // ### IMPORTANT - YOU NEED TO SET THIS ###
  database: '', // ### IMPORTANT - YOU NEED TO SET THIS ###
  synchronize: true,
  logging: true,
  schema: 'sampleschema',
  entities: [ SampleEntity ]
})
