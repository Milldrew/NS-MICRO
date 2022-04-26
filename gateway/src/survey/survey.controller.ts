import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Query,
  Request,
  UseGuards,
} from '@nestjs/common';
import { SurveyService } from './survey.service';
import { CreateSurveyDto } from './dto/create-survey.dto';
import { UpdateSurveyDto } from './dto/update-survey.dto';
import { PaginationQueryDto } from 'src/dtos/pagination-query.dto';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';

@Controller('survey')
export class SurveyController {
  constructor(private readonly surveyService: SurveyService) {}

  @Post()
  create(@Body() createSurveyDto: CreateSurveyDto) {
    console.log('hi from create survey');
    return this.surveyService.create(createSurveyDto);
  }

  @UseGuards(JwtAuthGuard)
  @Get('my')
  findAllMy(@Request() req) {
    console.log(req.user);
    return this.surveyService.findAllMy();
  }

  @Get()
  findAll(@Query() paginationQueryDto: PaginationQueryDto) {
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

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.surveyService.remove(+id);
  }
}
