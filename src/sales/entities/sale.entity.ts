import {
  Entity,
  Column,
  Index,
  OneToOne,
  JoinColumn,
  OneToMany,
} from 'typeorm';

import { Base } from './../../core/entities/base';
import { User } from './../../users/entities/user.entity';
import { Product } from './../../products/entities/product.entity';

@Entity({ name: 'sales' })
export class Sale extends Base {
  @Column()
  name: string;

  @OneToOne(() => User)
  @JoinColumn()
  user: User;

  @OneToMany(() => Product, (product) => product.sale)
  products: Product[];
}
