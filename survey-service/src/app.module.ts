import { ConfigModule } from '@nestjs/config';
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { SurveyModule } from './survey/survey.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ResponseModule } from './response/response.module';

@Module({
  imports: [
    ConfigModule.forRoot(),
    SurveyModule,
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env.DATABASE_HOST,
      port: +process.env.DATABASE_PORT,
      username: process.env.DATABASE_USER,
      password: process.env.DATABASE_PASSWORD,
      database: process.env.DATABASE_NAME,
      autoLoadEntities: true,
      synchronize: true,
    }),
    ResponseModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
