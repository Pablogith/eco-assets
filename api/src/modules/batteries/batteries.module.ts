import { Module } from '@nestjs/common';
import { BatteriesService } from './batteries.service';
import { BatteriesController } from './batteries.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BatteryStatus } from './entities/battery-status.entity';
import { Battery } from './entities/battery.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Battery, BatteryStatus])],
  controllers: [BatteriesController],
  providers: [BatteriesService],
  exports: [BatteriesService],
})
export class BatteriesModule {}
