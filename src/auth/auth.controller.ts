import { Body, Controller, Get, Post, UseGuards } from '@nestjs/common';

import { AuthService } from '../auth/auth.service';
import { UsersService } from '../users/users.service';

import { LocalAuthGuard } from './guards/local-auth.guard';
import { JwtAuthGuard } from './guards/jwt-auth.guard';

import { AuthLoginDTO } from './../auth/dto/auth-login.dto';
import { CreateUserDto } from './../users/dto/create-user.dto';

@Controller('auth')
export class AuthController {
  constructor(
    private readonly authService: AuthService,
    private readonly usersService: UsersService,
  ) {}

  @UseGuards(LocalAuthGuard)
  @Post('login')
  async login(@Body() user: AuthLoginDTO): Promise<any> {
    return this.authService.login(user);
  }

  @UseGuards(JwtAuthGuard)
  @Get('user')
  getUser(): any {
    return 'User list test';
  }
}
