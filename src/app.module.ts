import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CategoriesController } from './controllers/categories/categories.controller';
import { StoresController } from './controllers/stores/stores.controller';
import { UsersController } from './controllers/users/users.controller';
import { ProductsController } from './controllers/products/products.controller';
import { OrdersController } from './controllers/orders/orders.controller';
import { ProductsService } from './services/products/products.service';
import { CategoriesService } from './services/categories/categories.service';
import { OrdersService } from './services/orders/orders.service';
import { StoresService } from './services/stores/stores.service';
import { UsersService } from './services/users/users.service';

@Module({
   imports: [],
   controllers: [AppController, CategoriesController, StoresController, UsersController, ProductsController, OrdersController],
   providers: [AppService, ProductsService, CategoriesService, OrdersService, StoresService, UsersService],
})
export class AppModule {}
