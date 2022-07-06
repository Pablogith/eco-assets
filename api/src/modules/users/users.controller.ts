import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Query,
} from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './entities/user.entity';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post()
  public async create(@Body() createUserDto: CreateUserDto) {
    const user = await this.usersService.create(createUserDto);
    return { user };
  }

  @Get()
  public async findAll() {
    const users = await this.usersService.findAll();
    return { count: users.length, users };
  }

  @Get('me/:id/batteries')
  public async findAllBatteries(@Param('id') id: User['id']) {
    return this.usersService.findAllBatteries(id);
  }

  @Get('me/:id')
  public async findOneById(@Param('id') id: User['id']) {
    return this.usersService.findOneById(id);
  }

  @Get('me')
  public async findOneByEmail(@Query('email') email: string) {
    return this.usersService.findOneByEmail(email);
  }

  @Patch(':id')
  public async update(
    @Param('id') id: User['id'],
    @Body() updateUserDto: UpdateUserDto,
  ) {
    const user = await this.usersService.update(id, updateUserDto);
    return { user };
  }

  @Delete(':id')
  public async remove(@Param('id') id: User['id']) {
    await this.usersService.remove(id);
    return {
      message: 'User deleted',
    };
  }
}
