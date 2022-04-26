import { ClientProxy } from '@nestjs/microservices';
import { Inject, Injectable } from '@nestjs/common';
import { CreateSurveyDto } from './dto/create-survey.dto';
import { UpdateSurveyDto } from './dto/update-survey.dto';
import { PaginationQueryDto } from 'src/dtos/pagination-query.dto';
import { firstValueFrom } from 'rxjs';

@Injectable()
export class SurveyService {
  constructor(@Inject('SURVEY_SERVICE') private client: ClientProxy) {}

  async create(createSurveyDto: CreateSurveyDto) {
    return await this.client
      .send<CreateSurveyDto>({ cmd: 'createSurvey' }, createSurveyDto)
      .toPromise();
  }

  findAllMy() {
    return firstValueFrom(
      this.client.send<any>({ cmd: 'findAllMy' }, 'findAll'),
    );
  }
  findAll(paginationQueryDto: PaginationQueryDto) {
    console.log('hi');
    return this.client.send<any>({ cmd: 'findAll' }, paginationQueryDto);
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
