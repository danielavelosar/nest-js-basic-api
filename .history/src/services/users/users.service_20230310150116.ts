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
      return this.users.find((user) => user.id === id);
   }

   createUser(newUser: User) {
      this.counter++;
      newUser.id = this.counter;
      this.users.push(newUser);
   }

   updateUser(id: number, updatedUser: User) {
      const userIndex = this.users.findIndex((user) => user.id === id);
      this.users[userIndex] = updatedUser;
   }

   deleteUser(id: number) {
      const userIndex = this.users.findIndex((user) => user.id === id);
      this.users.splice(userIndex, 1);
   }
}
