import { Module } from '@nestjs/common';

import { SalesService } from './services/sales.service';
import { SalesController } from './controllers/sales.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Sale } from './entities/sale.entity';
import { ProductsModule } from './../products/products.module';
import { UsersModule } from './../users/users.module';

@Module({
  imports: [TypeOrmModule.forFeature([Sale]), ProductsModule, UsersModule],
  controllers: [SalesController],
  providers: [SalesService],
  exports: [SalesService],
})
export class SalesModule {}
