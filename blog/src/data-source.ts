import { DataSource } from 'typeorm';
import { User } from './users/user.entity';
export const AppDataSource = new DataSource({
  type: 'postgres',
  host: 'localhost',
  port: 5433,
  username: 'postgres',
  password: 'root',
  database: 'postgres',
  entities: [User],
  migrations: ['dist/migrations/*.js'],
  synchronize: true,
});
