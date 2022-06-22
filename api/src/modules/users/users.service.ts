import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

@Injectable()
export class UsersService {
  private readonly users: any[] = [
    {
      id: 1,
      name: 'John Doe',
      email: 'johndoe@gmail.com',
      password: '123456',
    },
    {
      id: 2,
      name: 'Pablo Escobar',
      email: 'pabloescobar@gmail.com',
      password: '123456',
    },
    {
      id: 3,
      name: 'Enrique Iglesias',
      email: 'enriqueeglesias@gmail.com',
      password: '123456',
    },
  ];

  public create(createUserDto: CreateUserDto) {
    return 'This action adds a new user';
  }

  public findAll() {
    return `This action returns all users`;
  }

  public findOneById(id: number) {
    return `This action returns a #${id} user`;
  }

  public findOneByEmail(email: string) {
    return this.users.find((user) => user.email === email);
  }

  public update(id: number, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user`;
  }

  public remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
