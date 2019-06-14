from rooms.chat_room import ChatRoom
from rooms.room_manager import RoomManager
import os

from flask import Flask
from flask_socketio import SocketIO, emit, send, join_room, rooms

import sys
sys.path.append('./rooms')


app = Flask(__name__)
app.config["SECRET_KEY"] = os.getenv("SECRET_KEY")
socketio = SocketIO(app)

room_manager = RoomManager()


@app.route("/")
def index():
    return "Project 2: TODO"


@socketio.on('message')
def handle_message(data):
    room_manager.get_room(data['room']).add_message(
        data['user'], data['body'], data['timestamp'])
    send({"body": data['body'], "author": data['user'],
          "timestamp": data['timestamp']}, room=data['room'], broadcast=False)


@socketio.on('join')
def _join_room(room_name):
    join_room(room_name)
    if room_name in room_manager.get_room_names():
        room = room_manager.get_room(room_name)
    else:
        room = ChatRoom(room_name)
        room_manager.add_room(room)
    emit('room-list', room_manager.get_room_names())
    emit('messages', room_manager.get_room(room_name).get_messages())


if __name__ == '__main__':
    socketio.run(app)
