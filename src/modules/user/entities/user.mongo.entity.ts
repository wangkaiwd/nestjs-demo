import { Column, Entity, ObjectId, ObjectIdColumn } from 'typeorm';

@Entity()
class User {
  @ObjectIdColumn()
  id!: ObjectId;
  @Column('text')
  name!: string;

  @Column('number')
  phone!: number;

  @Column('text')
  password!: string;
}

export default User;
