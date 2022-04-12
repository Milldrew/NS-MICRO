import { Controller, Get } from '@nestjs/common';
import { EventPattern } from '@nestjs/microservices';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @EventPattern('all_surveys')
  async getHello() {
    console.log('after emit');
    return this.appService.getHello();
  }
}
