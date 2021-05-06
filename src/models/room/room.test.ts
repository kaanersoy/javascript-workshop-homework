/* eslint-disable no-undef */
import { Room } from './room'
import { cagatay, esma } from '../../dummy-data'

describe('[room.ts]', () => {
  it('creates instance of room', () => {
    const roomName = 'Sample Room Name'
    const newRoom = new Room(roomName)
    expect(newRoom instanceof Room).toBeTruthy()

    newRoom.join(cagatay)
    newRoom.join(esma)

    // Test instance methods
    expect(cagatay.room).toStrictEqual(newRoom)
    expect(newRoom.smile(cagatay)).toStrictEqual(`${cagatay.name} smiled`)
    expect(newRoom.nextRound(cagatay)).toBeTruthy()
    expect(newRoom.nextRound(esma)).toBeFalsy()
    expect(newRoom.amIHost(cagatay)).toBeTruthy()
    expect(newRoom.amIHost(esma)).toBeFalsy()

    // Test instance methods
    expect(Room.allRooms()).toStrictEqual([newRoom])
    expect(Room.getRoom(newRoom.name)).toStrictEqual(newRoom)

    // Close room and check room is
    expect(newRoom.close(esma)).toBeFalsy()
    expect(newRoom.close(cagatay)).toBeTruthy()
    expect(Room.allRooms()).toEqual(expect.not.arrayContaining([newRoom]))
  })
})
