import {
  Column,
  CreateDateColumn,
  ObjectId,
  ObjectIdColumn,
  UpdateDateColumn,
} from 'typeorm';

abstract class Common {
  @ObjectIdColumn()
  id: ObjectId;

  @CreateDateColumn()
  createAt: Date;

  @UpdateDateColumn()
  updateAt: Date;

  @Column({
    default: false,
    // whether to hide this column by default when making query
    select: false,
  })
  isDelete: boolean;
}

export default Common;
