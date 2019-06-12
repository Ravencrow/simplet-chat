<template>
  <div class="conversation">
    <h3>Messages:</h3>
    <!-- <div class="message" v-for="message in messages" :key="message"><b>{{ message.author }}:</b> {{ message.body }}</div> -->
    <div class="message" v-for="message in messages" :key="message"><b></b> {{ message }}</div>
  </div>
</template>

<script>
export default {
  name: 'conversation',
  props: ['messages']
}
</script>

<style>

</style>
