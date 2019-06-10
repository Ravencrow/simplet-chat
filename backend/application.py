import os

from flask import Flask
from flask_socketio import SocketIO, emit, send, join_room, rooms

app = Flask(__name__)
app.config["SECRET_KEY"] = os.getenv("SECRET_KEY")
socketio = SocketIO(app)


@app.route("/")
def index():
    return "Project 2: TODO"


@socketio.on('message')
def handleMessage(message):
    print('Message: ' + message)
    send(message, broadcast=True)


@socketio.on('create')
def createRoom(room):
    print('Creating room: ' + room)
    join_room(room)
    roomList = rooms()
    emit('room-list', roomList)


if __name__ == '__main__':
    socketio.run(app)
