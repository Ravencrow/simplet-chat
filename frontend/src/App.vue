<template>
  <div id="app">
    <RegisterUser v-if="!appState.user" v-on:user-registered="registerUser"></RegisterUser>
    <div class="left-menu">
      <UserProfile v-if="appState.user" v-bind:user="appState.user" v-on:log-out="logOutUser"></UserProfile>
      <RoomList
        v-if="appState.user"
        v-bind:room-list="appState.roomList"
        v-bind:selected-room="appState.selectedRoom"
        v-on:change-room="changeRoom"
      ></RoomList>
    </div>
    <div class="chat-area">
      <Conversation v-if="appState.user" v-bind:messages="appState.messages"></Conversation>
      <ChatForm v-if="appState.user" v-on:send-message="sendMessage"></ChatForm>
    </div>
  </div>
</template>

<script>
import RegisterUser from "./user/RegisterUser";
import UserProfile from "./user/UserProfile";
import RoomList from "./chat/RoomList";
import Conversation from "./chat/Conversation";
import ChatForm from "./chat/ChatForm";
import { registerUser, logoutUser } from "./user/user-service";
import { AppState, changeState, loadState, clearState } from "./app-state";
import {
  onRoomListReceived,
  onMessagesReceived,
  sendMessage,
  onMessageReceived,
  changeRoom
} from "./chat/chat-service";

export default {
  name: "app",
  data: function() {
    return {
      appState: loadState() || AppState
    };
  },
  components: {
    RegisterUser,
    UserProfile,
    RoomList,
    Conversation,
    ChatForm
  },
  methods: {
    registerUser(user) {
      registerUser(user);
      changeRoom(user);
      changeState("selectedRoom", user);
    },
    logOutUser() {
      logoutUser();
      clearState();
    },
    updateRoomList(roomList) {
      changeState("roomList", roomList);
    },
    sendMessage(message) {
      let newMessage = {
        body: message,
        user: this.appState.user,
        timestamp: Date.now(),
        room: this.appState.selectedRoom
      };

      sendMessage(newMessage);
    },
    changeRoom(room) {
      changeRoom(room);
      changeState("selectedRoom", room);
    }
  },
  mounted() {
    onRoomListReceived(this.updateRoomList);
    onMessagesReceived(roomMessages => {
      changeState("messages", roomMessages);
    });
    onMessageReceived(message => {
      changeState("messages", [...this.appState.messages, message]);
    });
    if (this.appState.user) registerUser(this.appState.user);
    if (this.appState.selectedRoom) changeRoom(this.appState.selectedRoom);
  }
};
</script>

<style>
#app {
  display: flex;
  flex-wrap: wrap;
  height: 100vh;
}

.left-menu {
  display: flex;
  flex: 0 0 150px;
  flex-direction: column;
}

.chat-area {
  display: flex;
  flex: 1;
  flex-direction: column;
  height: 100vh;
}

.conversation {
  flex: 1;
}

.char-form {
  flex: 0 0 30px;
} 

.user-profile {
  flex: 0 0 150px;
}

.room-list {
  flex: 1;
}
</style>
