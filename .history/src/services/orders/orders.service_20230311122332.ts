import { Injectable, NotFoundException } from '@nestjs/common';
import { Order } from '../../interfaces/orders/orders.interface';
import { CreateOrderDTO, UpdateOrderDTO } from '../../dtos/orders.dto';

@Injectable()
export class OrdersService {
   private counter = 1;
   private orders: Order[] = [
      {
         id: 1,
         name: 'order 1',
         description: 'description 1',
      },
   ];

   findAllOrders() {
      return this.orders;
   }

   findOneOrder(id: number) {
      if (!this.orders.find((order) => order.id === id))
         throw new NotFoundException(`Order ${id} not found`);
      return this.orders.find((order) => order.id === id);
   }

   createOrder(newOrder: CreateOrderDTO) {
      this.counter++;
      newOrder.id = this.counter;
      this.orders.push(newOrder);
      return this.orders[this.orders.length - 1];
   }

   updateOrder(id: number, updatedOrder: UpdateOrderDTO) {
      const orderIndex = this.orders.findIndex((order) => order.id === id);
      if (!this.orders[orderIndex])
         throw new NotFoundException(`Order ${id} not found`);
      this.orders[orderIndex] = {
         ...this.orders[orderIndex],
         ...updatedOrder,
      };
      return this.orders[orderIndex];
   }

   deleteOrder(id: number) {
      const orderIndex = this.orders.findIndex((order) => order.id === id);
      this.orders.splice(orderIndex, 1);
   }
}
