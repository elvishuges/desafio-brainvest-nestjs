import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Sale } from '../entities/sale.entity';

import { CreateSaleDto } from '../dto/create-sale.dto';
import { Product } from 'src/products/entities/product.entity';
import { User } from 'src/users/entities/user.entity';

@Injectable()
export class SalesService {
  constructor(
    @InjectRepository(Sale) private readonly saleRepository: Repository<Sale>,
  ) {}

  async create(name, user: User, products: Product[]) {
    return await this.saleRepository.save({
      name: name,
      seller: user,
      products: products,
    });
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
