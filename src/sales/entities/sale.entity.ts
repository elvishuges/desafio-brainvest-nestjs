import { Entity, Column, Index, OneToOne, JoinColumn } from 'typeorm';

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
}
