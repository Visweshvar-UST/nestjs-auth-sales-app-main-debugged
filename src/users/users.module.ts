import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { User } from './user.entity';  // Import the User entity

@Module({
  imports: [TypeOrmModule.forFeature([User])],  // Register the User entity with TypeOrmModule
  providers: [UsersService],
  controllers: [UsersController],
  exports: [UsersService],  // Export the service in case it's needed in other modules
})
export class UsersModule {}
