import { Column, Entity, VersionColumn } from 'typeorm';
import Common from '../../shared/entities/common.entity';

@Entity()
class User extends Common {
  @Column('text')
  name: string;

  @Column('number')
  phone: number;

  @Column('text')
  password: string;

  // automatically set to the version of the entity(incremental number) each time you call save of entity manager of repository
  @VersionColumn({
    select: false,
  })
  version: number;
}

export default User;
