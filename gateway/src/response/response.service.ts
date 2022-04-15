import { ClientProxy } from '@nestjs/microservices';
import { Inject, Injectable } from '@nestjs/common';
import { CreateResponseDto } from './dto/create-response.dto';
import { UpdateResponseDto } from './dto/update-response.dto';

@Injectable()
export class ResponseService {
  constructor(@Inject('SURVEY_SERVICE') private client: ClientProxy) {}
  async create(createResponseDto: CreateResponseDto) {
    return await this.client
      .send<any>({ cmd: 'createResponse' }, createResponseDto)
      .toPromise();
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

  async remove(id: number) {
    console.log({ id });
    return await this.client.send<number>({ cmd: 'removeResponse' }, id);
  }
}
