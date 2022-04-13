import { ClientProxy } from '@nestjs/microservices';
import { Inject, Injectable } from '@nestjs/common';
import { CreateSurveyDto } from './dto/create-survey.dto';
import { UpdateSurveyDto } from './dto/update-survey.dto';

@Injectable()
export class SurveyService {
  constructor(@Inject('SURVEY_SERVICE') private client: ClientProxy) {}

  create(createSurveyDto: CreateSurveyDto) {
    return 'This action adds a new survey';
  }

  async findAll() {
    let all: any;
    console.log('before emit all_surveys');
    //this.client.emit('all_surveys', 'data');
    return await this.client
      .send<string>({ cmd: 'findAll' }, 'data')
      .toPromise();
  }

  findOne(id: number) {
    return `This action returns a #${id} survey`;
  }

  update(id: number, updateSurveyDto: UpdateSurveyDto) {
    return `This action updates a #${id} survey`;
  }

  remove(id: number) {
    return `This action removes a #${id} survey`;
  }
}
