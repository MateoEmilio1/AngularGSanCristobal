import { Injectable } from '@angular/core';
import { User } from './user';

const USERS: User[] = [
  {
    id:1,
    username: 'tute1',
    name: 'mateo',
    lastname: 'emilio',
  },
  {
    id:2,
    username: 'borsi',
    name: 'nicolas',
    lastname: 'borsi',
  },
  {
    
    id:3,
    username: 'tute3',
    name: 'mateo',
    lastname: 'emilio',
  },
  {
    
    id:4,
    username: 'tute4',
    name: 'mateo',
    lastname: 'emilio',
  },
  {
    id:5,
    username: 'tute5',
    name: 'mateo',
    lastname: 'emilio',
  }

];


@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor() { }

  getUsers(): User[] {

    return USERS;
  }

  getUserById(id: string | null):User | undefined { //es necsario poner el undefined porque si no encuentra un usuario tiene que devolver algo (en este caso undefined)
    if(!id){
      return undefined
    }
    return USERS.find(user => user.id = +id)
  }
}
