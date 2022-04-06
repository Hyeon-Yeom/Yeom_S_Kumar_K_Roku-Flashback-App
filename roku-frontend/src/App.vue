<template>
  <div class="container">
    <div class="nav">
      <div class="nav-1">
        <div class="logoBox">
          <img @click="backToHome" src="@/assets/images/roku-logo-white.jpg" alt="" class="logo">
        </div>

        <div class="subNav">
          <button @click="register" class="register">LOG IN/OUT</button>
          <button @click="subscribe" class="subscribe">SUBSCRIBE</button>
        </div>
      </div>

      <div class="nav-2 contentNav">
        <div class="all">
          <p>ALL</p>
        </div>
        <div class="tvShow">
          <p>TV SHOW</p>
          <div class="openTvShow"></div>
        </div>

        <div class="movies">
          <p>MOVIE</p>
          <div class="openMovies"></div>
        </div>
        
        <div class="music">
          <p>MUSIC</p>
          <div class="openMusic"></div>
        </div>
      </div>
    </div>

    <router-view></router-view>

  </div>
</template>

<style>
@import "@/assets/sass/app.scss";
</style>

<script>
export default {
  name: 'app',

  methods: {
    backToHome() {
      this.$router.push({ name: 'movie' });
    },

    register() {
      this.$router.push({ name: 'register' });
    },

    subscribe() {
      this.$router.push({ name: 'subscribe' });
    }
  }
}
</script>