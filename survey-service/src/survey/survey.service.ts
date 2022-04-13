import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
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
    console.log('hello from create');
    const survey = this.surveyRepo.create(createSurveyDto);
    return this.surveyRepo.save(survey);
  }

  findAll() {
    return this.surveyRepo.find();
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
