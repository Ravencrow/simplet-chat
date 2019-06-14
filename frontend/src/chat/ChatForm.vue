<template>
  <div class="chat-form">
    <md-card>
      <md-card-content>
        <md-field>
          <label>Message</label>
          <md-input v-model="message" @keyup.enter.native="sendMessage"></md-input>
          <md-button v-on:click="sendMessage" class="md-dense md-raised">send</md-button>
        </md-field>
      </md-card-content>
    </md-card>
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
