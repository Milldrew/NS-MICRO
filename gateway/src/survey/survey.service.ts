import { ClientProxy } from '@nestjs/microservices';
import { Inject, Injectable } from '@nestjs/common';
import { CreateSurveyDto } from './dto/create-survey.dto';
import { UpdateSurveyDto } from './dto/update-survey.dto';
import { PaginationQueryDto } from 'src/dtos/pagination-query.dto';
import { firstValueFrom } from 'rxjs';

@Injectable()
export class SurveyService {
  constructor(@Inject('SURVEY_SERVICE') private client: ClientProxy) {}

  async create(userId: number, createSurveyDto: CreateSurveyDto) {
    console.log('CREATE SERVICE', userId);
    console.log(userId, 'userid');
    console.log(createSurveyDto, 'dto');
    return await this.client
      .send<CreateSurveyDto>(
        { cmd: 'createSurvey' },
        { authorId: userId, ...createSurveyDto },
      )
      .toPromise();
  }

  findAllMy(id: number) {
    console.log({ id }, 'from survey service');
    return firstValueFrom(this.client.send<any>({ cmd: 'findAllMy' }, id));
  }
  findAll(paginationQueryDto: PaginationQueryDto) {
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
