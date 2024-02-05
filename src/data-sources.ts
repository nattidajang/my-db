import 'reflect-metadata';
import { createConnection } from 'typeorm';
import * as dotenv from 'dotenv';

dotenv.config();

console.log(`DB_HOST : ${process.env.DB_HOST}`);
console.log(`DB_PORT : ${process.env.DB_PORT}`);
console.log(`DB_USER : ${process.env.DB_USER}`);
console.log(`DB_NAME : ${process.env.DB_NAME}`);

createConnection({
  type: 'postgres',
  host: process.env.DB_HOST || '',
  port: parseInt(process.env.DB_PORT || '5432'),
  username: process.env.DB_USER,
  password: process.env.DB_PWD,
  database: process.env.DB_NAME,
  synchronize: true,
  logging: false,
  entities: ['src/entities/**/*.ts'],
  migrations: ['src/migrations/**/*.ts'],
  subscribers: [],
  migrationsTableName: 'mydb_migration',
}).then(connection => {
  console.log('Connected to the database');
}).catch(error => {
  console.error('Error connecting to the database', error);
});
