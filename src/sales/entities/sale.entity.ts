import {
  Entity,
  Column,
  Index,
  OneToOne,
  JoinColumn,
  OneToMany,
  ManyToOne,
} from 'typeorm';

import { Base } from './../../core/entities/base';
import { User } from './../../users/entities/user.entity';
import { Product } from './../../products/entities/product.entity';
import { ApiProperty } from '@nestjs/swagger';

@Entity({ name: 'sales' })
export class Sale extends Base {
  @Column()
  name: string;

  @OneToMany(() => Product, (product) => product.sale)
  products: Product[];

  @ManyToOne(() => User, (user) => user.sale)
  user: User;
}
