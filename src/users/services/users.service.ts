import { Inject, Injectable, NotFoundException } from '@nestjs/common';
import { Repository } from 'typeorm';
import { CreateUserDto } from '../dto/create-user.dto/create-user.dto';
import { UpdateUserDto } from '../dto/update-user.dto/update-user.dto';
import { UserEntity } from '../entities/user.entity/user.entity';

@Injectable()
export class UsersService {
  @Inject('USERS_REPOSITORY')
  private readonly userRepository: Repository<UserEntity>;

  async findAll() {
    return this.userRepository.find();
  }

  async findOne(id: string) {
    const user = await this.userRepository.findOne({ where: { id } });

    if (!user) {
      throw new NotFoundException(`UserEntity ID ${id} not found`);
    }

    return user;
  }

  async create(createUserDto: CreateUserDto) {
    const user = this.userRepository.create(createUserDto);

    return this.userRepository.save(user);
  }

  async update(id: string, updateUserDto: UpdateUserDto) {
    const user = await this.userRepository.preload({
      id: id,
      ...updateUserDto,
    });
    if (!user) {
      throw new NotFoundException(`UserEntity ID ${id} not found`);
    }

    return this.userRepository.save(user);
  }

  async remove(id: string) {
    const user = await this.userRepository.findOne({ where: { id } });

    if (!user) {
      throw new NotFoundException(`UserEntity ID ${id} not found`);
    }

    return this.userRepository.remove(user);
  }
}
