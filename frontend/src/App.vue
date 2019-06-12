<template>
  <div id="app">
    <RegisterUser v-if="!appState.user" v-on:user-registered="registerUser"></RegisterUser>
    <UserProfile v-if="appState.user" v-bind:user="appState.user" v-on:log-out="logOutUser"></UserProfile>
    <RoomList v-bind:room-list="appState.roomList" v-on:change-room="changeRoom"></RoomList>
    <Conversation v-bind:messages="appState.messages"></Conversation>
    <ChatForm v-on:send-message="sendMessage"></ChatForm>
  </div>
</template>

<script>
import RegisterUser from "./user/RegisterUser";
import UserProfile from "./user/UserProfile";
import RoomList from "./chat/RoomList";
import Conversation from "./chat/Conversation";
import ChatForm from "./chat/ChatForm";
import {
  registerUser,
  logoutUser,
  getRegisteredUser
} from "./user/user-service";
import { AppState } from "./app-state";
import {
  createRoom,
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
      appState: AppState
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
      createRoom(user);
      this.appState.selectedRoom = user
    },
    logOutUser() {
      logoutUser();
      this.appState.roomList = [];
    },
    updateRoomList(roomList) {
      this.appState.roomList = roomList;
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
      changeRoom(room)
      this.appState.selectedRoom = room
    }
  },
  mounted() {
    this.appState.user = getRegisteredUser();
    onRoomListReceived(this.updateRoomList);
    onMessagesReceived(roomMessages => {
      this.appState.messages = roomMessages;
    });
    onMessageReceived(message => {
      this.appState.messages.push(message)
    })
  }
};
</script>

<style>
</style>
