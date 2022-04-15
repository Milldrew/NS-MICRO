import { ClientProxy } from '@nestjs/microservices';
import { Inject, Injectable } from '@nestjs/common';
import { CreateResponseDto } from './dto/create-response.dto';
import { UpdateResponseDto } from './dto/update-response.dto';

@Injectable()
export class ResponseService {
  constructor(@Inject('SURVEY_SERVICE') private client: ClientProxy) {}
  create(createResponseDto: CreateResponseDto) {
    return 'This action adds a new response';
  }

  async findAll() {
    return await this.client
      .send<any>({ cmd: 'allResponses' }, 'allResponses')
      .toPromise();
  }

  findOne(id: number) {
    return `This action returns a #${id} response`;
  }

  update(id: number, updateResponseDto: UpdateResponseDto) {
    return `This action updates a #${id} response`;
  }

  remove(id: number) {
    return `This action removes a #${id} response`;
  }
}