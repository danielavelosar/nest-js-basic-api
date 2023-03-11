import { Controller, Get, Param, Query } from '@nestjs/common';

@Controller('stores')
export class StoresController {
   @Get('stores/:storeId')
   getStore(@Param() params: any): string {
      return ` mi tienda ${params.storeId}`;
   }

   @Get('stores/:storeId/info')
   getInfoStore(@Param('storeId') storeId: any): string {
      return ` la info de mi tienda ${storeId}`;
   }

   @Get('stores')
   getStores(
      @Query('query') query: any,
      @Query('limit') limit = 100,
      @Query('offset') offset = 10,
   ): string {
      return ` mi tienda ${query} y mi limite es ${limit} y mi offset es ${offset}`;
   }
}
