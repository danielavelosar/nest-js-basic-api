import { Injectable } from '@nestjs/common';
import { Category } from '../../interfaces/categories/categories.interface';

@Injectable()
//aquí se supone quue me conecto con mi base de datos y saco los datos, pero no lo hago porque no tengo base de datos
export class CategoriesService {
   private counter = 1; //para agregar un id
   private categories: Category[] = [
      {
         id: 1,
         name: 'category 1',
         description: 'description 1',
      },
   ];

   findAllCategories() {
      return this.categories;
   }

   findOneCategory(id: number) {
      return this.categories.find((category) => category.id === id);
   }
}
