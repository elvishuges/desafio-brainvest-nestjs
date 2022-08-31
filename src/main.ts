import { NestFactory } from '@nestjs/core';
import { ValidationPipe } from '@nestjs/common';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { AppModule } from './app.module';
import { useContainer } from 'class-validator';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  useContainer(app.select(AppModule), { fallbackOnErrors: true });

  const config = new DocumentBuilder()
    .setTitle('Treinamento Blockhub - Nestjs')
    .setDescription('API para o treinamento de Nesjs')
    .setVersion('1.0')
    .addTag('treinamento')
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);

  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true, // lista permitida de propriedade do DTO
      forbidNonWhitelisted: true, // não permite
      transform: true,
    }),
  );

  await app.listen(3000);
}
bootstrap();
