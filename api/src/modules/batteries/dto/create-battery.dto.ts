import { IsNotEmpty, IsNumber, IsOptional } from 'class-validator';

export class CreateBatteryDto {
  @IsNotEmpty()
  name: string;

  @IsOptional()
  description: string;

  @IsNotEmpty()
  type: string;

  @IsOptional()
  @IsNumber()
  level: number;

  @IsOptional()
  @IsNumber()
  voltage: number;

  @IsOptional()
  @IsNumber()
  weight: number;

  @IsOptional()
  @IsNumber()
  capacity: number;

  @IsOptional()
  @IsNumber()
  generatingPower: number;

  @IsOptional()
  status: any;
}
