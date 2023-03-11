import {
   Controller,
   Get,
   Param,
   Query,
   Body,
   Post,
   Put,
   Delete,
   ParseIntPipe,
} from '@nestjs/common';
import { OrdersService } from '../../services/orders/orders.service';
import { CreateOrderDTO, UpdateOrderDTO } from '../../dtos/orders.dto';

@Controller('orders')
export class OrdersController {
   constructor(private ordersService: OrdersService) {} //inyectamos el servicio no se si con readonly o no

   @Get()
   getOrders(
      @Query('query') query: any,
      @Query('limit') limit = 100,
      @Query('offset') offset = 10,
   ) {
      return {
         message: ` mi orden ${query} y mi limite es ${limit} y mi offset es ${offset}`,
      };
      //TODO: implementar el servicio
   }

   @Get(':orderId') //stores/1 //no hace falta poner el /stores
   getOrder(@Param('orderId', ParseIntPipe) orderId: number) {
      // return {
      //    message: ` mi orden ${params.orderId}`,
      // };
      return this.ordersService.findOneOrder(orderId);
   }

   @Post() //casi siempre retorna un json con un post
   createOrder(@Body() payload: CreateOrderDTO): any {
      // return {
      //    message: 'order created',
      //    payload,
      //    body: {
      //       name: 'string',
      //       description: 'string',
      //       price: 'number',
      //    },
      // };
      return this.ordersService.createOrder(payload);
   }

   @Put(':orderId')
   updateOrder(@Param('orderId') orderId: any, @Body() payload: any) {
      // return {
      //    message: `la orden ${orderId} fue actualizada`,
      //    payload,
      // };
      return this.ordersService.updateOrder(orderId, payload);
   }

   @Delete(':orderId')
   deleteOrder(@Param('orderId') orderId: any) {
      // return {
      //    message: `la orden ${orderId} fue eliminada`,
      // };
      return this.ordersService.deleteOrder(orderId);
   }
}
