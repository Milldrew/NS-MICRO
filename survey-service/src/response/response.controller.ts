import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { ResponseService } from './response.service';
import { CreateResponseDto } from './dto/create-response.dto';
import { UpdateResponseDto } from './dto/update-response.dto';
import { MessagePattern } from '@nestjs/microservices';

@Controller('response')
export class ResponseController {
  constructor(private readonly responseService: ResponseService) {}

  @MessagePattern({ cmd: 'createResponse' })
  create(@Body() createResponseDto: CreateResponseDto) {
    return this.responseService.create(createResponseDto);
  }

  @MessagePattern({ cmd: 'allResponses' })
  findAll() {
    return this.responseService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.responseService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateResponseDto: UpdateResponseDto,
  ) {
    return this.responseService.update(+id, updateResponseDto);
  }

  @MessagePattern({ cmd: 'removeResponse' })
  remove(id: number) {
    return this.responseService.remove(id);
  }
}
