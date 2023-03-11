import { Injectable } from '@nestjs/common';
import { User } from '../../interfaces/users/users.interface';

@Injectable()
export class UsersService {
   private counter = 1;
   private users: User[] = [
      {
         id: 1,
         name: 'user 1',
      },
   ];

   findAllUsers() {
      return this.users;
   }

   findOneUser(id: number) {
      const userIndex = this.users.findIndex((user) => user.id === id);
      return this.users[userIndex];
   }

   createUser(newUser: any) {
      this.counter++;
      newUser.id = this.counter;
      this.users.push(newUser);
      return this.users[this.users.length - 1];
   }

   updateUser(id: number, updatedUser: any) {
      const userIndex = this.users.findIndex((user) => user.id === id);
      this.users[userIndex] = {
         ...this.users[userIndex],
         ...updatedUser,
      };
      return this.users[userIndex];
   }

   deleteUser(id: number) {
      const userIndex = this.users.findIndex((user) => user.id === id);
      this.users.splice(userIndex, 1);
   }
}
