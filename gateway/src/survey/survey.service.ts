import { ClientProxy } from '@nestjs/microservices';
import { Inject, Injectable } from '@nestjs/common';
import { CreateSurveyDto } from './dto/create-survey.dto';
import { UpdateSurveyDto } from './dto/update-survey.dto';
import { PaginationQueryDto } from 'src/dtos/pagination-query.dto';

@Injectable()
export class SurveyService {
  constructor(@Inject('SURVEY_SERVICE') private client: ClientProxy) {}

  async create(createSurveyDto: CreateSurveyDto) {
    return await this.client
      .send<CreateSurveyDto>({ cmd: 'createSurvey' }, createSurveyDto)
      .toPromise();
  }

  async findAllMy() {
    return await this.client
      .send<any>({ cmd: 'findAllMy' }, 'findAll')
      .toPromise();
  }
  async findAll(paginationQueryDto: PaginationQueryDto) {
    return await this.client
      .send<any>({ cmd: 'findAll' }, paginationQueryDto)
      .toPromise();
  }

  findOne(id: number) {
    return `This action returns a #${id} survey`;
  }

  update(id: number, updateSurveyDto: UpdateSurveyDto) {
    return `This action updates a #${id} survey`;
  }

  async remove(id: number) {
    return await this.client.send({ cmd: 'removeSurvey' }, id);
  }
}
