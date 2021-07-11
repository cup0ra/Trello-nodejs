import { NestFactory } from '@nestjs/core';
import { NestExpressApplication } from '@nestjs/platform-express';
import { NestFastifyApplication, FastifyAdapter } from '@nestjs/platform-fastify';

import { AppModule } from './app.module';
import { addAdmin } from './common/addAdmin';
import { PORT, USE_FASTIFY } from './common/conctans-evn';

async function bootstrap() {
  const app = USE_FASTIFY
    ? await NestFactory.create<NestFastifyApplication>(AppModule, new FastifyAdapter())
    : await NestFactory.create<NestExpressApplication>(AppModule);
  // const swaggerDocument = YAML.load(path.join(__dirname, '../doc/api.yaml'));

  //SwaggerModule.setup('docs', app, swaggerDocument);
  await app.listen(PORT);
  addAdmin();
}
bootstrap();
