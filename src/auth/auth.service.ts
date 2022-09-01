import { Injectable } from '@nestjs/common';
import { UsersService } from '../users/users.service';
import { JwtService } from '@nestjs/jwt';
import { AuthLoginDTO } from './../auth/dto/auth-login.dto';

@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService,
    private readonly jwtService: JwtService,
  ) {}

  public async findUser(email: string): Promise<any> {
    return this.usersService.findByEmail(email);
  }

  public async login(loginDto: AuthLoginDTO): Promise<any> {
    const payload: any = { email: loginDto.email, sub: loginDto.password };
    const accessToken = this.jwtService.sign(payload);
    const refreshToken = this.jwtService.sign(
      {
        ...payload,
      },
      { algorithm: 'RS256' },
    );

    return {
      accessToken,
      refreshToken,
    };
  }
}
