import openSocket from 'socket.io-client'

const socket = openSocket('localhost:5000')

export const createRoom = message => {
  socket.emit('create', message)
}

export const sendMessage = message => {
  socket.emit('message', message)
}

export const onRoomListReceived = callback => {
  socket.off('room-list', callback)
  socket.on('room-list', callback)
}

export const onMessageReceived = callback => {
  socket.on('message', callback)
}
