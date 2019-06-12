class ChatRoom:
    def __init__(self, name):
        self.name = name
        self.messages = ['Mola', 'esto es de prueba', 'Olé ahí!']

    def add_message(self, message):
        self.messages.append(message)
        self.messages = self.messages[-100:]

    def get_messages(self):
        return self.messages

    def get_messages_count(self):
        return len(self.messages)

    def get_name(self):
        return self.name