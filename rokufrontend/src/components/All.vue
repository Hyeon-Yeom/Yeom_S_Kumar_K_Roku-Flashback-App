<template>
    <div>
        <div class="navBox">
            <Nav />
        </div>

        <div class="content-tvshow">
            <div class="tvshow-posters">

            </div>

            <button @click="TvShow" class="tvshow-viewmore">VIEW MORE</button>
        </div>

        <div class="content-movie">
            <div class="movie-posters">

            </div>

            <button @click="Movie" class="movie-viewmore">VIEW MORE</button>
        </div>

        <div class="content-music">
            <div class="music-posters">

            </div>

            <button @click="Music" class="music-viewmore">VIEW MORE</button>
        </div>
    </div>
</template>

<style>
@import "@/assets/sass/all.scss";
</style>

<script>
import Nav from "@/components/Nav.vue";

export default {
    name: 'all',

    components: {
        Nav
    }
}
</script>