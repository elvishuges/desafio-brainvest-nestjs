import { Sale } from '../../sales/entities/sale.entity';
import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { Base } from '../../core/entities/base';

@Entity({ name: 'products' })
export class Product extends Base {
  @Column()
  name: string;

  @ManyToOne(() => Sale, (sale) => sale.products)
  sale: Sale;
}
