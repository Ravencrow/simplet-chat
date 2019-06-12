import os

from flask import Flask
from flask_socketio import SocketIO, emit, send, join_room, rooms

import sys
sys.path.append('./rooms')

from rooms.room_manager import RoomManager
from rooms.chat_room import ChatRoom

app = Flask(__name__)
app.config["SECRET_KEY"] = os.getenv("SECRET_KEY")
socketio = SocketIO(app)

room_manager = RoomManager()

@app.route("/")
def index():
    return "Project 2: TODO"


@socketio.on('message')
def handle_message(data):
    room_manager.get_room(data['room']).add_message(data['body'])
    send(data['body'], room=data['room'], broadcast=False)


@socketio.on('create')
def create_room(room):
    join_room(room)
    if room not in room_manager.get_room_names():
        new_room = ChatRoom(room)
        room_manager.add_room(new_room)
    emit('room-list', room_manager.get_room_names())
    emit('messages', new_room.get_messages())

@socketio.on('join')
def _join_room(room_name):
    join_room(room_name)
    emit('messages', room_manager.get_room(room_name).get_messages())

if __name__ == '__main__':
    socketio.run(app)
