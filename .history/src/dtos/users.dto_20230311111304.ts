export class CreateUserDTO {
   id: number;
   readonly name: string;
}

export class UpdateUserDTO {
   readonly id?: number; // ? means optional
   readonly name?: string;
}
