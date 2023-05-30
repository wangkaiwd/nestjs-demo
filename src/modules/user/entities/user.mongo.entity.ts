import {
  Column,
  Entity,
  ObjectId,
  ObjectIdColumn,
  VersionColumn,
} from 'typeorm';
import Common from '../../shared/entities/common.entity';

@Entity()
class User extends Common {
  @ObjectIdColumn()
  id: ObjectId;

  @Column('text')
  name: string;

  @Column('text')
  password: string;

  @Column({
    type: 'text',
    select: false,
  })
  salt: string;

  @Column({ nullable: true })
  token: string | null;

  // automatically set to the version of the entity(incremental number) each time you call save of entity manager of repository
  @VersionColumn({
    select: false,
  })
  version: number;
}

export default User;
