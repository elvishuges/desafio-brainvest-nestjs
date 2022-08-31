import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsNotEmpty, IsString, Length } from 'class-validator';

export class CreateUserDto {
  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  readonly firstName: string;

  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  readonly lastName: string;

  @ApiProperty()
  @IsEmail()
  @IsNotEmpty()
  @Length(10, 100)
  readonly email: string;

  @ApiProperty()
  @Length(8, 20)
  @IsString()
  @IsNotEmpty()
  readonly password: string;
}
