import { TypeOrmModuleOptions } from '@nestjs/typeorm';

export const typeOrmConfig: TypeOrmModuleOptions = {
  type: 'postgres',
  host: 'localhost',
  port: 5433,
  username: 'postgres', // Replace with your PostgreSQL username
  password: 'root', // Replace with your PostgreSQL password
  database: 'postgres', // Replace with your PostgreSQL database name
  entities: [__dirname + '/../**/*.entity{.ts,.js}'], // Path to your entities
  synchronize: true,
};
