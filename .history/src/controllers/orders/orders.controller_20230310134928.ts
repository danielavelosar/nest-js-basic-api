import { Controller, Get, Param, Query, Body, Post } from '@nestjs/common';

@Controller('orders')
export class OrdersController {
   @Get()
   getOrders(
      @Query('query') query: any,
      @Query('limit') limit = 100,
      @Query('offset') offset = 10,
   ) {
      return {
         message: ` mi orden ${query} y mi limite es ${limit} y mi offset es ${offset}`,
      };
   }

   @Get(':orderId') //stores/1 //no hace falta poner el /stores
   getOrder(@Param() params: any) {
      return {
         message: ` mi orden ${params.orderId}`,
      };
   }

   @Post() //casi siempre retorna un json con un post
   createOrder(@Body() payload: any): any {
      return {
         message: 'order created',
         payload,
         body: {
            name: 'string',
            description: 'string',
            price: 'number',
         },
      };
   }
}