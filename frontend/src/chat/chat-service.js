import openSocket from 'socket.io-client'

const socket = openSocket('localhost:5000')

export const createRoom = room => {
  socket.emit('create', room)
  socket.emit('join', room)
  sendMessage({body: 'Ostia pedrín!!!', room})
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

export const onMessagesReceived = callback => {
  socket.on('messages', callback)
}
