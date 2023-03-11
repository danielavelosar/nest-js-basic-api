import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CategoriesController } from './controllers/categories/categories.controller';
import { StoresController } from './controllers/stores/stores.controller';
import { UsersController } from './collections/users/users.controller';
import { ProductsController } from './collections/products/products.controller';
import { OrdersController } from './collections/orders/orders.controller';

@Module({
  imports: [],
  controllers: [AppController, CategoriesController, StoresController, UsersController, ProductsController, OrdersController],
  providers: [AppService],
})
export class AppModule {}
