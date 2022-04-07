<template>
    <div class="container-movie">
        <div class="navBox">
            <Nav />
        </div>

        <div class="movieHeading">
            <h2 class="subtitle">MOVIES <br> <span class="spanTag-date">1960's - 2000's</span></h2>
            <div class="subtitle-categor">
                <h3 class="subtitle-date">1960's</h3>
            </div>
        </div>

        <SixtyMovies />

        <div class="movieHeading">
            <div class="subtitle-categor">
                <h3 class="subtitle-date">1970's</h3>
            </div>
        </div>

        <SeventyMovies />

        <div class="movieHeading">
            <div class="subtitle-categor">
                <h3 class="subtitle-date">1980's</h3>
            </div>
        </div>

        <EightyMovies />

        <div class="movieHeading">
            <div class="subtitle-categor">
                <h3 class="subtitle-date">1990's</h3>
            </div>
        </div>

        <NinetyMovies />

        <div class="movieHeading">
            <div class="subtitle-categor">
                <h3 class="subtitle-date">2000's</h3>
            </div>
        </div>

        <Posters />
    </div>
</template>

<style>
    @import "@/assets/sass/movie.scss";
    @import "@/assets/sass/nav.scss";
</style>

<script>
import Posters from "@/components/Posters.vue";
import SixtyMovies from "@/components/SixtyMovies.vue";
import SeventyMovies from "@/components/SeventyMovies.vue";
import EightyMovies from "@/components/EightyMovies.vue";
import NinetyMovies from "@/components/NinetyMovies.vue";
import Nav from "@/components/Nav.vue";

export default {
    name: 'movie',

    components: {
        Posters,
        Nav,
        SixtyMovies,
        SeventyMovies,
        EightyMovies,
        NinetyMovies
    }
}
</script>