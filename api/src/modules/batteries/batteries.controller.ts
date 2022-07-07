import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { BatteriesService } from './batteries.service';
import { CreateBatteryDto } from './dto/create-battery.dto';
import { UpdateBatteryDto } from './dto/update-battery.dto';

@Controller('batteries')
export class BatteriesController {
  constructor(private readonly batteriesService: BatteriesService) {}

  @Get('status')
  public async findAllBatteryStatus() {
    const status = await this.batteriesService.findAllBatteryStatus();
    return { batteryStatus: status };
  }

  @Post()
  public async create(@Body() createBatteryDto: CreateBatteryDto) {
    const battery = await this.batteriesService.create(createBatteryDto);
    return { battery };
  }

  @Get()
  public async findAll() {
    return this.batteriesService.findAll();
  }

  @Get(':id')
  public async findOne(@Param('id') id: string) {
    return this.batteriesService.findOne(id);
  }

  @Patch(':id')
  public async update(
    @Param('id') id: string,
    @Body() updateBatteryDto: UpdateBatteryDto,
  ) {
    return this.batteriesService.update(id, updateBatteryDto);
  }

  @Delete(':id')
  public async remove(@Param('id') id: string) {
    return this.batteriesService.remove(id);
  }
}
