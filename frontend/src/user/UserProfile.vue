<template>
  <div class="user-profile">
    <div class="user-name">{{ user }}</div>
    <md-button v-on:click="$emit('log-out')">Log out</md-button>
  </div>
</template>

<script>
export default {
  props: ["user"]
};
</script>

<style>
</style>
