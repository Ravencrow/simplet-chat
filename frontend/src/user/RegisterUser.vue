<template>
  <div class="register">
    <md-card>
      <md-card-header>
        <div class="md-title">Chat-ON</div>
      </md-card-header>

      <md-card-content>
        <md-field>
          <label>Register your user</label>
          <md-input v-model="userName" @keyup.enter.native="registerUser"></md-input>
        </md-field>
      </md-card-content>

      <md-card-actions>
        <md-button v-on:click="registerUser">Register</md-button>
      </md-card-actions>
    </md-card>
  </div>
</template>

<script>
export default {
  name: "RegisterUser",
  data: function() {
    return {
      userName: ""
    };
  },
  methods: {
    registerUser() {
      this.$emit('user-registered', this.userName)
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
a {
  color: #42b983;
}

h3 {
  margin: 40px 0 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

.md-card {
  height: auto;
  margin: 100px auto;
  width: 90vw;
}

.register {
  width: 100vw;
}

ul {
  list-style-type: none;
  padding: 0;
}
</style>
