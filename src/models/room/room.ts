import { User } from '../user/user'
export class Room {
  name: string;
  members: User[]
  round: number
  roundScores?: []

  constructor (name: string) {
    this.name = name
    this.members = []
    this.round = 1
    Room.allRoomInstances.push(this)
  }

  static allRoomInstances: Room[] = []
  static allRooms () {
    return this.allRoomInstances
  }

  static getRoom (name: string) {
    return Room.allRoomInstances.find(room => room.name === name)
  }

  join (user: User) {
    user.room = this
    this.members.push(user)
    // If someone in the room
    if (this.members[0] === user) {
      return this
    }

    // If room empty
    const host = this.members[0]
    return `${host.name} is in the room`
  }

  amIHost (user: User) {
    // If User is the host
    if (this.members[0] === user) return true

    // If user not the host
    return false
  }

  nextRound (user: User) {
    // If user is host
    if (this.members[0] === user) {
      this.round++
      return true
    }
    // If user is not host
    return false
  }

  smile (user: User) {
    return `${user.name} smiled`
  }
}
