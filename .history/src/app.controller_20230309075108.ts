import { Controller, Get, Param } from '@nestjs/common';
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
    newEndpoint(): string{
        return 'hola bb';
    }

    @Get('stores/:storeId')
    getStore(@Param() params: any): string{
        return ` mi tienda ${params.storeId}`;
    }

    @Get('stores/:storeId')
    getInfoStore(@Param('storeId') storeId: any): string{
        return ` mi tienda ${storeId}`;
    }
}
