import { ApiProperty } from '@nestjs/swagger';
import {
  IsEmail,
  IsNotEmpty,
  IsString,
  Length,
  Validate,
} from 'class-validator';
import { User } from '../../users/entities/user.entity';
import { Column } from 'typeorm';

export class CreateSaleDto {
  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  readonly name: string;

  @Column()
  @ApiProperty()
  @IsNotEmpty()
  user: User;
}
