<template>
  <div class="conversation">
    <md-card>
      <md-card-header>
        <div class="md-title">Messages</div>
      </md-card-header>

      <md-card-content>
        <div class="message" v-for="message in messages" :key="message.timestamp">
          {{messageDate(message.timestamp)}}
          <b>{{ message.author }}:</b>
          {{ message.body }}
        </div>
      </md-card-content>
    </md-card>
  </div>
</template>

<script>
export default {
  name: "conversation",
  props: ["messages"],
  methods: {
    messageDate: function(timestamp) {
      return new Date(timestamp).toLocaleString();
    }
  },
  updated() {
    const conversation = document.querySelector(".conversation");
    conversation.scrollTop = conversation.scrollHeight;
  }
};
</script>

<style scoped>
.conversation {
  overflow: scroll;
}

.md-card {
  height: auto;
  min-height: 100%;
}
</style>
