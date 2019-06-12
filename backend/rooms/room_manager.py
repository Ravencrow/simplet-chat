class RoomManager:
    def __init__(self):
        self.room_list = []

    def add_room(self, room):
        self.room_list.append(room)

    def get_room_names(self):
        room_names = []
        for room in self.room_list:
            room_names.append(room.get_name())
        return room_names

    def get_room(self, room_name):
        for room in self.room_list:
            if room.get_name() == room_name:
                return room