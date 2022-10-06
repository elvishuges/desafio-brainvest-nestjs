import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Sale } from '../entities/sale.entity';

import { CreateSaleDto } from '../dto/create-sale.dto';

@Injectable()
export class SalesService {
  constructor(
    @InjectRepository(Sale) private saleRepository: Repository<Sale>,
  ) {}

  async create(createSaleDto: CreateSaleDto) {
    const newSale = await this.saleRepository.save(createSaleDto);
    return this.findOne(newSale.id);
  }

  async findOne(id: number) {
    const query = { where: { id } };

    const sale = await this.saleRepository.find({
      loadRelationIds: { relations: ['products'] },
    });

    if (!sale) {
      throw new HttpException(`sale id ${id} not found`, HttpStatus.NOT_FOUND);
    }
    return sale;
  }
}
