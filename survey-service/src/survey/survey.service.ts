import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { PaginationQueryDto } from 'src/dtos/pagination-query.dto';
import { Repository } from 'typeorm';
import { CreateSurveyDto } from './dto/create-survey.dto';
import { UpdateSurveyDto } from './dto/update-survey.dto';
import { Survey } from './entities/survey.entity';

@Injectable()
export class SurveyService {
  constructor(
    @InjectRepository(Survey) private readonly surveyRepo: Repository<Survey>,
  ) {}
  create(createSurveyDto: CreateSurveyDto) {
    console.log('hello from create AGAIN');
    const survey = this.surveyRepo.create(createSurveyDto);
    console.log(survey);
    return this.surveyRepo.save(survey);
  }

  findAllMy(authorId: number) {
    return this.surveyRepo.findBy({ authorId });
  }

  findAll(paginationQueryDto: PaginationQueryDto) {
    const { offset, limit } = paginationQueryDto;
    if (offset && limit) {
      return this.surveyRepo.find({
        skip: offset,
        take: limit,
      });
    } else if (limit) {
      return this.surveyRepo.find({
        take: limit,
      });
    }
    this.surveyRepo.find();
  }

  findOne(id: number) {
    return `This action returns a #${id} survey`;
  }

  update(id: number, updateSurveyDto: UpdateSurveyDto) {
    return `This action updates a #${id} survey`;
  }

  async remove(id: number) {
    const survey = await this.surveyRepo.findOneBy({ id });
    if (!survey) {
      throw new NotFoundException(`survey ${id} not found`);
    }
    return this.surveyRepo.remove(survey);
  }
}
