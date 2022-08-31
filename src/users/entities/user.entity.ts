import { Entity, Column, Index } from 'typeorm';
import { Exclude } from 'class-transformer';
import { hashSync } from 'bcrypt';

import { Base } from './../../core/entities/base';

@Entity('user')
export class User extends Base {
  @Column()
  firstName: string;

  @Column()
  lastName: string;

  @Index({ unique: true })
  @Column()
  email: string;

  @Exclude()
  @Column({
    select: false,
    transformer: {
      to(password: string) {
        return hashSync(password, 10);
      },
      from(hash: string) {
        return hash;
      },
    },
  })
  password: string;
}
