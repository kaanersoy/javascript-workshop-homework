import { Room } from '../room/room'

export class User {
  id: string;
  name: string;
  room?: Room
  constructor (id: string, name: string) {
    this.id = id
    this.name = name
    User.allUsers.push(this)
  }

  // For assign and return all users
  static allUsers: User[] = [];

  static all () {
    return User.allUsers
  }

  static get (id: string) {
    return User.allUsers.find(u => u.id === id)
  }

  getRoom () {
    return this.room
  }
}
