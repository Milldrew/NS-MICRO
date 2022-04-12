import { Inject, Injectable } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';

@Injectable()
export class AppService {
  constructor(@Inject('SURVEY_SERVICE') private client: ClientProxy) {}
  getHello(): string {
    return 'Hello World!';
  }

  getSurveys(action: string) {
    console.log('before emit');
    this.client.emit('all_surveys', action);
  }
}
