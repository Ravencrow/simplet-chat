<template>
  <div id="app">
    <RegisterUser v-if="!appState.user" v-on:user-registered="registerUser"></RegisterUser>
    <UserProfile v-if="appState.user" v-bind:user="appState.user" v-on:log-out="logOutUser"></UserProfile>
    <RoomList v-bind:room-list="appState.roomList"></RoomList>
    <Conversation v-bind:messages="appState.roomMessages"></Conversation>
  </div>
</template>

<script>
import RegisterUser from "./user/RegisterUser";
import UserProfile from "./user/UserProfile";
import RoomList from "./chat/RoomList";
import Conversation from "./chat/Conversation";
import {
  registerUser,
  logoutUser,
  getRegisteredUser
} from "./user/user-service";
import { AppState } from "./app-state";
import { createRoom, onRoomListReceived, onMessagesReceived } from "./chat/chat-service";

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
    Conversation
  },
  methods: {
    registerUser(user) {
      registerUser(user);
      createRoom(user);
    },
    logOutUser() {
      logoutUser();
      this.appState.roomList = [];
    },
    updateRoomList(roomList) {
      this.appState.roomList = roomList;
    }
  },
  mounted() {
    this.appState.user = getRegisteredUser();
    onRoomListReceived(this.updateRoomList);
    onMessagesReceived((roomMessages) => {
      this.appState.roomMessages = roomMessages
  })
  }
};
</script>

<style>
</style>
