import { Injectable } from '@nestjs/common';
import { Store } from '../../interfaces/stores/stores.interface';
import { CreateStoreDTO, UpdateStoreDTO } from '../../dtos/stores.dto';

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

   createStore(newStore: CreateStoreDTO) {
      this.counter++;
      newStore.id = this.counter;
      this.stores.push(newStore);
      return this.stores[this.stores.length - 1];
   }

   updateStore(id: number, updatedStore: UpdateStoreDTO) {
      const storeIndex = this.stores.findIndex((store) => store.id === id);
      this.stores[storeIndex] = {
         ...this.stores[storeIndex],
         ...updatedStore,
      };
      return this.stores[storeIndex];
   }

   deleteStore(id: number) {
      const storeIndex = this.stores.findIndex((store) => store.id === id);
      this.stores.splice(storeIndex, 1);
   }
}
