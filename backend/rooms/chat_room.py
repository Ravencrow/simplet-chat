class ChatRoom:
    def __init__(self, name):
        self.name = name
        self.messages = []

    def add_message(self, user, message, timestamp):
        self.messages.append(
            {"body": message, "author": user, "timestamp": timestamp})
        self.messages = self.messages[-100:]

    def get_messages(self):
        return self.messages

    def get_messages_count(self):
        return len(self.messages)

    def get_name(self):
        return self.name
