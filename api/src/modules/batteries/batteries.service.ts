import { Injectable } from '@nestjs/common';
import { CreateBatteryDto } from './dto/create-battery.dto';
import { UpdateBatteryDto } from './dto/update-battery.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Battery } from './entities/battery.entity';
import { Repository, UpdateResult } from 'typeorm';
import { UsersService } from '../users/users.service';
import { BatteryStatus } from './entities/battery-status.entity';

@Injectable()
export class BatteriesService {
  constructor(
    @InjectRepository(Battery)
    private readonly batteryRepository: Repository<Battery>,
    @InjectRepository(BatteryStatus)
    private readonly batteryStatusRepository: Repository<BatteryStatus>,
    private usersService: UsersService,
  ) {}

  public async create(createBatteryDto: CreateBatteryDto): Promise<Battery> {
    const user = await this.usersService.findOneById(createBatteryDto.userId);
    const battery = {
      ...createBatteryDto,
      user,
    };
    return this.batteryRepository.save(battery);
  }

  public async findAll(): Promise<Battery[]> {
    const options = {
      where: { isDeleted: false },
      relations: ['status', 'user'],
    };
    return this.batteryRepository.find(options);
  }

  public async findOne(id: Battery['id']): Promise<Battery> {
    const options = {
      where: { id, isDeleted: false },
    };
    return this.batteryRepository.findOne(options);
  }

  public async update(
    id: Battery['id'],
    updateBatteryDto: UpdateBatteryDto,
  ): Promise<UpdateResult> {
    return this.batteryRepository.update(id, updateBatteryDto);
  }

  public async remove(id: Battery['id']): Promise<void> {
    await this.batteryRepository.update(id, { isDeleted: true });
  }

  public async findAllBatteryStatus(): Promise<BatteryStatus[]> {
    return this.batteryStatusRepository.find();
  }
}
