<template>
    <div class="nav-container">
        <div class="nav">
            <div class="nav-1">
                <div class="logoBox">
                    <img @click="backToHome" src="@/assets/images/roku-logo-white.jpg" alt="" class="logo">
                    <p></p>
                </div>

                <div class="subNav">
                    <button @click="register" class="register">REGISTER</button>
                    <button @click="subscribe" class="subscribe">SUBSCRIBE</button>
                </div>
            </div>

            <div class="nav-2">
                <div class="contentNav">
                    <div class="all">
                        <p @click="All">ALL</p>
                    </div>

                    <div class="tvShow">
                        <p @click="TvShow">TV SHOW</p>
                    <div class="openTvShow"></div>
                    </div>

                    <div class="movies">
                        <p @click="Movies">MOVIE</p>
                    <div class="openMovies"></div>
                    </div>
                    
                    <div class="music">
                        <p @click="Music">MUSIC</p>
                    <div class="openMusic"></div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style>
@import "@/assets/sass/nav.scss";
</style>

<script>
export default {
    name: "nav",

    methods: {
        backToHome() {
            this.$router.push({ name: 'start' });
        },

        register() {
            this.$router.push({ name: 'register' });
        },

        subscribe() {
            this.$router.push({ name: 'subscribe' });
        },

        Movies() {
            this.$router.push({ name: 'movie' });
        },

        All() {
            this.$router.push({ name: 'all' });
        },

        TvShow() {
            this.$router.push({ name: 'tvshow' });
        },

        Music() {
            this.$router.push({ name: 'music' });
        }
    }
}
</script>