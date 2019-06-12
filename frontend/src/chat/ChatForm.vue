<template>
  <div class="chat-form">
    <md-field>
      <label>Message</label>
      <md-input v-model="message"></md-input>
      <md-button v-on:click="sendMessage()">send</md-button>
    </md-field>
  </div>
</template>

<script>
export default {
  name: "chat-form",
  data: function() {
    return {
      message: ""
    };
  },
  methods: {
    sendMessage() {
      this.$emit("send-message", this.message);
      this.message = "";
    }
  }
};
</script>

<style>
</style>
