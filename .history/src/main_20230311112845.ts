import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
   const app = await NestFactory.create(AppModule);
   app.useGlobalPipes(
      new ValidationPipe({
         whitelist: true, // elimina los datos que no estan definidos en el DTO
         forbidNonWhitelisted: true, // devuelve un error si se envia un dato que no esta definido en el DTO
      }),
   ); // ayuda a que class-validator funcione
   await app.listen(3000);
}
bootstrap();
