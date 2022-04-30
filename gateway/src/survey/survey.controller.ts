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

  @UseGuards(JwtAuthGuard)
  @Post()
  create(@Request() req, @Body() createSurveyDto: CreateSurveyDto) {
    console.log('FROM CREATE hello');
    console.table(req.user);
    console.table(createSurveyDto);
    return this.surveyService.create(req.user.userId, createSurveyDto);
  }

  @UseGuards(JwtAuthGuard)
  @Get('my')
  findAllMy(@Request() req) {
    console.log(req.user, 'from controller');
    return this.surveyService.findAllMy(req.user.userId);
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
