import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './entities/user.entity';
import { Repository, UpdateResult } from 'typeorm';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
  ) {}

  public async create(
    createUserDto: CreateUserDto,
  ): Promise<CreateUserDto & User> {
    return this.userRepository.save(createUserDto);
  }

  public async findAll(): Promise<User[]> {
    return this.userRepository.find();
  }

  public findAllBatteries(id: User['id']): Promise<User> {
    const options = {
      where: { id },
      relations: ['batteries'],
    };
    return this.userRepository.findOne(options);
  }

  public async findOneById(id: User['id']): Promise<User> {
    const options = {
      where: { id },
    };
    return this.userRepository.findOne(options);
  }

  public async findOneByEmail(email: string): Promise<User> {
    const options = {
      where: { email },
    };
    return this.userRepository.findOne(options);
  }

  public async update(
    id: User['id'],
    updateUserDto: UpdateUserDto,
  ): Promise<UpdateResult> {
    return this.userRepository.update(id, updateUserDto);
  }

  public async remove(id: User['id']): Promise<void> {
    const options = {
      where: { id },
    };
    const user = await this.userRepository.findOne(options);
    user.isDeleted = true;
    await this.userRepository.save(user);
  }
}
