import { Injectable } from '@nestjs/common';
import { Order } from '../../interfaces/orders/orders.interface';

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
      return this.orders.find((order) => order.id === id);
   }

   createOrder(newOrder: Order) {
      this.counter++;
      newOrder.id = this.counter;
      this.orders.push(newOrder);
   }

   updateOrder(id: number, updatedOrder: Order) {
      const orderIndex = this.orders.findIndex((order) => order.id === id);
      this.orders[orderIndex] = updatedOrder;
   }

   deleteOrder(id: number) {
      const orderIndex = this.orders.findIndex((order) => order.id === id);
      this.orders.splice(orderIndex, 1);
   }
}
