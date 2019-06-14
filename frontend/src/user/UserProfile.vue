<template>
  <div class="user-profile">
    <md-card>
      <md-card-header>
        <div class="md-title">{{ user }}</div>
      </md-card-header>

      <md-card-actions>
        <md-button v-on:click="$emit('log-out')">Log out</md-button>
      </md-card-actions>
    </md-card>
  </div>
</template>

<script>
export default {
  props: ["user"]
};
</script>

<style>
</style>
