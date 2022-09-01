import { Body, Controller, Get, Post, UseGuards } from '@nestjs/common';

import { AuthService } from '../auth/auth.service';
import { UsersService } from '../users/users.service';
import { AuthGuard } from '@nestjs/passport';

import { AuthLoginDTO } from './../auth/dto/auth-login.dto';
import { CreateUserDto } from './../users/dto/create-user.dto';

@Controller('auth')
export class AuthController {
  constructor(
    private readonly authService: AuthService,
    private readonly usersService: UsersService,
  ) {}

  @UseGuards(AuthGuard('local'))
  @Post('login')
  async login(@Body() user: AuthLoginDTO): Promise<any> {
    return this.authService.login(user);
  }
}
