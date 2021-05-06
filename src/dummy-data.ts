import { User } from './models/user/user'

const socketId1 = '1'
const name1 = 'Cagatay Cali'
const cagatay = new User(socketId1, name1) // This code will be write at user class

const socketId2 = '2'
const name2 = 'Esma Aydogdu'
const esma = new User(socketId2, name2)

export { cagatay, esma }
