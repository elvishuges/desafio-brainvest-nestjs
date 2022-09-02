import { Module } from '@nestjs/common';
import { UsersModule } from '../users/users.module';
import { AuthService } from '../auth/auth.service';
import { JwtModule } from '@nestjs/jwt';
import { AuthController } from './auth.controller';
import { LocalStrategy } from './strategies/local.strategy';
import { jwtConstants } from './constants';

@Module({
  imports: [
    UsersModule,
    JwtModule.register({
      secret: jwtConstants.secret,
      signOptions: { expiresIn: '60s' },
    }),
  ],
  providers: [AuthService, LocalStrategy],
  exports: [JwtModule],
  controllers: [AuthController],
})
export class AuthModule {}
