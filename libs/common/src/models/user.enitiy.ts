import { AbstractEntity } from '@app/common';
import { Column, Entity, ManyToMany } from 'typeorm';
import { Role } from './role.entity';
import { JoinTable } from 'typeorm/browser';

@Entity()
export class User extends AbstractEntity<User> {
  @Column()
  email: string;
  @Column()
  password: string;
  @ManyToMany(() => Role, { cascade: true })
  @JoinTable()
  roles?: Role[];
}
