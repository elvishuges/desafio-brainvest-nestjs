import { Post, Get, Body, HttpCode, HttpStatus, Param } from '@nestjs/common';

import { ApiBearerAuth, ApiOperation, ApiTags } from '@nestjs/swagger';
import { CreateSaleDto } from '../dto/create-sale.dto';

import { Controller } from '@nestjs/common';
import { SalesService } from '../services/sales.service';
import { ProductsService } from './../../products/services/products.service';
import { UsersService } from './../../users/services/users.service';

@ApiBearerAuth('bearerAuth')
@Controller('sales')
@ApiTags('sales')
export class SalesController {
  constructor(
    private readonly salesService: SalesService,
    private readonly productsService: ProductsService,
    private readonly usersServices: UsersService,
  ) {}

  @ApiOperation({ summary: 'Create new sale' })
  @HttpCode(HttpStatus.CREATED)
  @Post()
  async create(@Body() createSaleDto: CreateSaleDto) {
    const user = await this.usersServices.findOne(createSaleDto.user);

    const products = await this.getProducts(createSaleDto.products);
    const sale = this.salesService.create(createSaleDto.name, user, products);
    return sale;
  }

  @ApiOperation({ summary: 'Find user by id' })
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.salesService.findOne(+id);
  }

  async getProducts(productsId: number[]) {
    return Promise.all(
      productsId.map((id) => {
        return this.productsService.findOne(id);
      }),
    );
  }
}
