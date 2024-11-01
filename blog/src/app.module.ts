// src/app.module.ts
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import { User } from './users/user.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres', // Set the database type to PostgreSQL
      host: 'localhost', // Your PostgreSQL host
      port: 5432, // Default PostgreSQL port
      username: 'postgres', // Your PostgreSQL username
      password: 'root', // Your PostgreSQL password
      database: 'postgres', // Your PostgreSQL database name
      entities: [User],
      synchronize: true, // Set to false in production
    }),
    AuthModule,
    UsersModule,
  ],
})
export class AppModule {}
