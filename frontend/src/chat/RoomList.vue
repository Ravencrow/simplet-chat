<template>
  <div class="room-list">
    <div class="room" v-for="room in roomList" :key="room">{{ room }}</div>
  </div>
</template>

<script>
export default {
  name: "room-list",
  props: ["roomList"]
};
</script>

<style>
</style>
