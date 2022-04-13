import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const PORT = +process.env.NEWSFEED_PORT;
  const app = await NestFactory.create(AppModule);
  await app.listen(PORT);
  console.log(PORT);
}
bootstrap();
