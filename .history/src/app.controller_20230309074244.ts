import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
   constructor(private readonly appService: AppService) {}

   @Get()
   getHello(): string {
      // return this.appService.getHello();
      return 'holiiiii bb how are you?';
   }

    @Get('hola')
    {
        return 'hola bb';
    }
}
