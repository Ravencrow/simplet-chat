<template>
  <div id="app">
    <RegisterUser v-if="!appState.user" v-on:user-registered="registerUser"></RegisterUser>
    <UserProfile v-if="appState.user" v-bind:user="appState.user" v-on:log-out="logOutUser"></UserProfile>
  </div>
</template>

<script>
import RegisterUser from "./user/RegisterUser";
import UserProfile from "./user/UserProfile";
import {
  registerUser,
  logoutUser,
  getRegisteredUser
} from "./user/user-service";
import { AppState } from "./app-state";
import { createRoom } from "./chat/chat-service";

export default {
  name: "app",
  data: () => {
    return {
      appState: AppState
    };
  },
  components: {
    RegisterUser,
    UserProfile
  },
  methods: {
    registerUser: user => {
      registerUser(user);
      createRoom(user);
    },
    logOutUser: logoutUser
  },
  mounted: () => {
    AppState.user = getRegisteredUser();
  }
};
</script>

<style>
</style>
