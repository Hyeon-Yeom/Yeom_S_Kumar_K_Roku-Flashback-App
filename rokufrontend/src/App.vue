<template>
  <div class="container container-bgrd">

    <meta name="viewport" content="width=device-width, initial-scale=1.0">

    <div class="appContainer">
      <router-view :key="$route.path" :loggedin="authenticated" :role="role" @setauth="setAuthenticated"></router-view>
    </div>

  </div>
</template>

<style>
@import "@/assets/sass/app.scss";
</style>

<script>
import Start from './views/Starting.vue';

export default {
  name: 'app',

  views: {
    Start
  },

  data() {
    return {
      authenticated: false,
      role: 0
    }
  },

  methods: {
    setAuthenticated(status) {
      debugger;
      this.authenticated = status.status;
      this.role = status.role;
    }
  }
}
</script>