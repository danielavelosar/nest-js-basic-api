import { Injectable } from '@nestjs/common';
import { Store } from '../../interfaces/stores/stores.interface';

@Injectable()
export class StoresService {
   private counter = 1;
   private stores: Store[] = [
      {
         id: 1,
         name: 'store 1',
         description: 'description 1',
      },
   ];

   findAllStores() {
      return this.stores;
   }

   findOneStore(id: number) {
      return this.stores.find((store) => store.id === id);
   }

   createStore(newStore: Store) {
      this.counter++;
      newStore.id = this.counter;
      this.stores.push(newStore);
   }

   updateStore(id: number, updatedStore: Store) {
      const storeIndex = this.stores.findIndex((store) => store.id === id);
      this.stores[storeIndex] = {
         ...this.stores[storeIndex],
         ...updatedStore,
      };
   }

   deleteStore(id: number) {
      const storeIndex = this.stores.findIndex((store) => store.id === id);
      this.stores.splice(storeIndex, 1);
   }
}
