import { Column } from 'typeorm';

export class Role {
  @Column()
  name: string;

  constructor(entity: Partial<Role>) {
    Object.assign(this, entity);
  }
}
