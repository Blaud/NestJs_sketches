import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as keys from '../config/keys';

const port = keys.port;

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.setGlobalPrefix('api');
  await app.listen(port, () => console.log(`Server started on ${port}`));
}
bootstrap();
