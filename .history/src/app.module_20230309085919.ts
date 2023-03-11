import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CategoriesController } from './controllers/categories/categories.controller';
import { StoresController } from './controllers/stores/stores.controller';

@Module({
   imports: [],
   controllers: [AppController, CategoriesController, StoresController],
   providers: [AppService],
})
export class AppModule {}
