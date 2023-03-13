import { Module } from '@nestjs/common';
import { DatabaseModule } from 'src/database/database.module';
import { UsersController } from './controllers/users/users.controller';
import { UsersService } from './services/users.service';
import { usersProviders } from './users.providers';

@Module({
  imports:[DatabaseModule],
  controllers: [UsersController],
  providers: [...usersProviders, UsersService],
})
export class UsersModule {}
