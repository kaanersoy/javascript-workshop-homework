/* eslint-disable no-undef */
import { User } from './user'

describe('[user.ts]', () => {
  it('creates instance of user', () => {
    const user = new User('1', '1')
    const user2 = new User('2', '2')
    expect(user instanceof User).toBe(true)
    expect(User.all()).toStrictEqual([user, user2])
    expect(User.get('1')).toStrictEqual(user)
  })
})
