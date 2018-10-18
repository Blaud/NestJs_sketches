import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as keys from '../config/keys';
import * as path from 'path';
import { Req, Res } from '@nestjs/common';
import express = require('express');
import { NotFoundExceptionFilter } from './not-found-exception-filter.filter';

const port = keys.port;

async function bootstrap() {

  const server = express();

  const app = await NestFactory.create(AppModule, server);

  if (process.env.NODE_ENV === 'production') {
    app.useStaticAssets(path.resolve(__dirname, '../client', 'dist', 'client'));

    app.useGlobalFilters(new NotFoundExceptionFilter());
  }

  await app.listen(port, () => console.log(`Server started on ${port}`));
}

bootstrap();
