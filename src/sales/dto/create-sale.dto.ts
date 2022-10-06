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
import { Product } from 'src/products/entities/product.entity';

export class CreateSaleDto {
  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  readonly name: string;

  @Column()
  @ApiProperty()
  user: User;

  @Column()
  @ApiProperty()
  @IsNotEmpty()
  products: Product[];
}
