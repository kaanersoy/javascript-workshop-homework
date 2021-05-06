/* eslint-disable no-undef */
import { Room } from '../room/room'
import { User } from './user'
import { cagatay, esma } from '../../dummy-data'

describe('[user.ts]', () => {
  it('creates instance of user', () => {
    const testRoom = new Room('roomname')
    cagatay.room = testRoom

    // Test instance functions
    expect(cagatay instanceof User).toBe(true)

    // Test static functions
    expect(User.all()).toStrictEqual([cagatay, esma])
    expect(cagatay.getRoom()).toStrictEqual(testRoom)
  })
})
