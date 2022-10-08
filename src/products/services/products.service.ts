import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateProductDto } from '../dto/create-product.dto';
import { Product } from '../entities/product.entity';

@Injectable()
export class ProductsService {
  constructor(
    @InjectRepository(Product) private productRepository: Repository<Product>,
  ) {}

  async create(createProductDto: CreateProductDto) {
    const newProduct = await this.productRepository.save(createProductDto);
    return newProduct;
  }

  async findOne(id: number): Promise<Product> {
    const query = { where: { id } };
    const product = await this.productRepository.findOne(query);
    return product;
  }
}
