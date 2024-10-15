import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, UpdateResult } from 'typeorm';
import { User } from './user.entity';
import { UUID } from 'crypto';

@Injectable()
export class UsersService {

  constructor(
    @InjectRepository(User)  // Inject the User repository
    private usersRepository: Repository<User>,
  ) {}
  findOneByEmail(email: string): Promise<User | null> {
    return this.usersRepository.findOneBy({ email });
  }

  findOneById(id: UUID): Promise<User | null> {
    return this.usersRepository.findOneBy({ id });
  }

  update(userId: UUID, userInformation: Partial<User>): Promise<UpdateResult> {
    return this.usersRepository.update(userId, userInformation);
  }
  async findOne(email: string): Promise<User | undefined> {
    return this.usersRepository.findOne({ where: { email } });
  }

  async create(email: string, password: string, role: string): Promise<User> {
    const newUser = this.usersRepository.create({ email, password, role });
    return this.usersRepository.save(newUser);
  }
}
