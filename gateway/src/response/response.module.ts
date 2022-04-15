import { Module } from '@nestjs/common';
import { ResponseService } from './response.service';
import { ResponseController } from './response.controller';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { ConfigModule } from '@nestjs/config';
import { Response } from 'src/survey/entities/response.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    ConfigModule.forRoot(),
    ClientsModule.register([
      {
        name: 'SURVEY_SERVICE',
        transport: Transport.TCP,
        options: {
          port: +process.env.SURVEY_PORT,
        },
      },
    ]),
  ],
  controllers: [ResponseController],
  providers: [ResponseService],
})
export class ResponseModule {}
