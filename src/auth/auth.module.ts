import { Module } from '@nestjs/common';
import { UsersModule } from '../users/users.module';
import { AuthService } from '../auth/auth.service';
import { JwtModule } from '@nestjs/jwt';
import { AuthController } from './auth.controller';
import { LocalStrategy } from './strategies/local.strategy';

@Module({
  imports: [UsersModule, JwtModule],
  providers: [AuthService, LocalStrategy],
  exports: [JwtModule],
  controllers: [AuthController],
})
export class AuthModule {}
