<template>
  <div class="room-list">
    <md-card>
      <md-card-header>
        <div class="md-title">Room List:</div>
      </md-card-header>

      <md-card-content>
        <md-button 
          class="room md-dense"
          v-bind:class="{'md-raised': selectedRoom === room}"
          v-for="room in roomList"
          :key="room"
          v-on:click="$emit('change-room', room)"
        >{{ room }}</md-button>
      </md-card-content>
    </md-card>
  </div>
</template>

<script>
export default {
  name: "room-list",
  props: ["roomList", "selectedRoom"]
};
</script>

<style>
.md-button {
  margin-left: 8px !important; 
}

.md-card {
  height: 100%;
}
</style>
