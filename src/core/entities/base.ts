import {
  CreateDateColumn,
  DeleteDateColumn,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
  VersionColumn,
  Column,
} from 'typeorm';

export abstract class Base {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ select: false })
  @CreateDateColumn()
  readonly createdAt: Date;

  @Column({ select: false })
  @UpdateDateColumn()
  readonly updatedAt: Date;

  @Column({ select: false })
  @DeleteDateColumn()
  readonly deletedAt: Date;

  @Column({ select: false })
  @VersionColumn()
  readonly version: number;
}
