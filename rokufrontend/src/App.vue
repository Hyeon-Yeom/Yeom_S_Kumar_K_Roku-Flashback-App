<template>
  <div class="container container-bgrd">

    <div class="appContainer">
      <router-view></router-view>
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
  }
}
</script>