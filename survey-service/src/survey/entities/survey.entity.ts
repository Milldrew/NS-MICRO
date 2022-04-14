import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Response } from './response.entity';

@Entity()
export class Survey {
  @PrimaryGeneratedColumn()
  id: number;
  @Column()
  authorId: number;
  @Column()
  question: string;
  @Column('json')
  answers: string[];
  @OneToMany((type) => Response, (response) => response.surveyId)
  responses: Response;
}
