import { BaseEntity, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('user')
export class TestEntity extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;
}
