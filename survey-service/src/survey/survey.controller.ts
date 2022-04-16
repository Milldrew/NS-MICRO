import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { SurveyService } from './survey.service';
import { CreateSurveyDto } from './dto/create-survey.dto';
import { UpdateSurveyDto } from './dto/update-survey.dto';
import { EventPattern, MessagePattern } from '@nestjs/microservices';
import { PaginationQueryDto } from 'src/dtos/pagination-query.dto';

@Controller('survey')
export class SurveyController {
  constructor(private readonly surveyService: SurveyService) {}

  @MessagePattern({ cmd: 'createSurvey' })
  create(@Body() createSurveyDto: CreateSurveyDto) {
    return this.surveyService.create(createSurveyDto);
  }
  @MessagePattern({ cmd: 'findAllMy' })
  async findAllMy(data: null): Promise<any> {
    return this.surveyService.findAllMy();
  }
  @MessagePattern({ cmd: 'findAll' })
  async findAll(paginationQueryDto: PaginationQueryDto): Promise<any> {
    return this.surveyService.findAll(paginationQueryDto);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.surveyService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateSurveyDto: UpdateSurveyDto) {
    return this.surveyService.update(+id, updateSurveyDto);
  }

  @MessagePattern({ cmd: 'removeSurvey' })
  remove(id: number) {
    return this.surveyService.remove(+id);
  }
}
