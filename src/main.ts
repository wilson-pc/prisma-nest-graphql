import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { json } from 'body-parser';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors();
  app.use(json({ limit: '100mb'}));
  const PORT = process.env.PORT || 3000;
  await app.listen(PORT);

}
bootstrap();
