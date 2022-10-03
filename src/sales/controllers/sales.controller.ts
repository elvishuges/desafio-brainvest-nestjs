import { Post, Get, Body, HttpCode, HttpStatus, Param } from '@nestjs/common';

import { ApiBearerAuth, ApiOperation, ApiTags } from '@nestjs/swagger';
import { CreateSaleDto } from '../dto/create-sale.dto';

import { Controller } from '@nestjs/common';
import { SalesService } from '../services/sales.service';

@ApiBearerAuth('bearerAuth')
@Controller('sales')
@ApiTags('sales')
export class SalesController {
  constructor(private readonly salesService: SalesService) {}

  @ApiOperation({ summary: 'Create new sale' })
  @HttpCode(HttpStatus.CREATED)
  @Post()
  create(@Body() createSaleDto: CreateSaleDto) {
    return this.salesService.create(createSaleDto);
  }

  @ApiOperation({ summary: 'Find user by id' })
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.salesService.findOne(+id);
  }
}
