import { forwardRef, Module } from '@nestjs/common';
import { BatteriesService } from './batteries.service';
import { BatteriesController } from './batteries.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BatteryStatus } from './entities/battery-status.entity';
import { Battery } from './entities/battery.entity';
import { UsersModule } from '../users/users.module';

@Module({
  imports: [
    TypeOrmModule.forFeature([Battery, BatteryStatus]),
    forwardRef(() => UsersModule),
  ],
  controllers: [BatteriesController],
  providers: [BatteriesService],
  exports: [BatteriesService],
})
export class BatteriesModule {}
