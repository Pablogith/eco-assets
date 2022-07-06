import { Injectable } from '@nestjs/common';
import { CreateBatteryDto } from './dto/create-battery.dto';
import { UpdateBatteryDto } from './dto/update-battery.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Battery } from './entities/battery.entity';
import { Repository, UpdateResult } from 'typeorm';

@Injectable()
export class BatteriesService {
  constructor(
    @InjectRepository(Battery)
    private readonly batteryRepository: Repository<Battery>,
  ) {}

  public async create(
    createBatteryDto: CreateBatteryDto,
  ): Promise<CreateBatteryDto & Battery> {
    return this.batteryRepository.save(createBatteryDto);
  }

  public async findAll(): Promise<Battery[]> {
    const options = {
      where: { isDeleted: false },
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
}
