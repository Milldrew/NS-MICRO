import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Response } from 'src/survey/entities/response.entity';
import { Repository } from 'typeorm';
import { CreateResponseDto } from './dto/create-response.dto';
import { UpdateResponseDto } from './dto/update-response.dto';

@Injectable()
export class ResponseService {
  constructor(
    @InjectRepository(Response)
    private readonly responseRepo: Repository<Response>,
  ) {}
  create(createResponseDto: CreateResponseDto) {
    const updatedResponse = { authorId: 1, ...createResponseDto };
    const response = this.responseRepo.create(updatedResponse);

    return this.responseRepo.save(response);
  }

  findAll() {
    return this.responseRepo.find();
  }

  findOne(id: number) {
    return `This action returns a #${id} response`;
  }

  update(id: number, updateResponseDto: UpdateResponseDto) {
    return `This action updates a #${id} response`;
  }

  async remove(id: number) {
    console.log({ id });
    const response = await this.responseRepo.findOneBy({ id });
    if (!response) {
      throw new NotFoundException(`Respone #${id} not found`);
    }
    console.log('jello from remove', response);
    return this.responseRepo.remove(response);
  }
}
