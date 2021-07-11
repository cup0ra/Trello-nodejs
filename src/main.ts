import { NestFactory } from '@nestjs/core';
import { NestExpressApplication } from '@nestjs/platform-express';
import { NestFastifyApplication, FastifyAdapter } from '@nestjs/platform-fastify';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

import { AppModule } from './app.module';
import { addAdmin } from './common/addAdmin';
import { PORT, USE_FASTIFY } from './common/conctans-evn';

async function bootstrap() {
  const app =
    USE_FASTIFY === 'true'
      ? await NestFactory.create<NestFastifyApplication>(AppModule, new FastifyAdapter())
      : await NestFactory.create<NestExpressApplication>(AppModule);

  const config = new DocumentBuilder()
    .setTitle('Trello Service')
    .setDescription('Lets try to create a competitor for Trello!')
    .setVersion('1.0.0')
    .addTag('Trello')
    .addBearerAuth()
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('docs', app, document);

  await app.listen(PORT);
  addAdmin();
}
bootstrap();
