import { NestFactory } from '@nestjs/core';
import { NestExpressApplication } from '@nestjs/platform-express';

import { AppModule } from './app.module';
import { addAdmin } from './common/addAdmin';
import { PORT } from './common/conctans-evn';

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);
  // const swaggerDocument = YAML.load(path.join(__dirname, '../doc/api.yaml'));

  //SwaggerModule.setup('docs', app, swaggerDocument);
  await app.listen(PORT);
  addAdmin();
}
bootstrap();
