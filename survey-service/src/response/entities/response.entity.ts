import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Response {
  @PrimaryGeneratedColumn()
  id: number;
  @Column()
  authorId: number;
  @Column()
  surveyId: number;
  @Column()
  answerIndex: number;
}
