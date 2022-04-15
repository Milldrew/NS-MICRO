import { Injectable } from '@nestjs/common';
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
    const response = this.responseRepo.create(createResponseDto);
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

  remove(id: number) {
    return `This action removes a #${id} response`;
  }
}
