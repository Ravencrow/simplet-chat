<template>
  <div class="register">
    <md-field>
      <label>Register your user</label>
      <md-input v-model="userName"></md-input>
      <md-button v-on:click="$emit('user-registered', userName)">Register</md-button>
    </md-field>
  </div>
</template>

<script>
export default {
  name: "RegisterUser",
  data: () => {
    return {
      userName: ""
    };
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
