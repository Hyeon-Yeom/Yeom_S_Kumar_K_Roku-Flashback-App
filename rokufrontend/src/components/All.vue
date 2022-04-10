<template>
    <div>
        <div class="navBox">
            <Nav />
        </div>

        <section class="content-from-all">
            <div class="each-content content-tvshow">
                <div class="tvshow-posters">
                    <h2>TV SHOWS</h2>
                </div>

                <div class="tvshows-all">
                    <p><span class="icon">🙏</span><br>( It's Under The Construction. We Will Come Back Soon. Sorry For inconvenience. )</p>
                </div>

                <button @click="TvShow" class="viewMore tvshow-viewmore">VIEW MORE</button>
            </div>

            <div class="each-content content-movie">
                <div class="movie-posters">
                    <h2>MOVIES</h2>
                </div>

                <div class="moviePosters-all">
                    <img class="poster poster-1" src="@/assets/images/maintain-the-quarantine.png" alt="">
                    <img class="poster poster-2" src="@/assets/images/the-40-year-oold-virgin.png" alt="">
                    <img class="poster poster-3" src="@/assets/images/adaptation.png" alt="">
                    <img class="poster poster-4" src="@/assets/images/almost-famous.png" alt="">
                    <img class="poster poster-5" src="@/assets/images/anti-christ.png" alt="">
                    <img class="poster poster-6" src="@/assets/images/zopiac.png" alt="">
                    <img class="poster poster-7" src="@/assets/images/american-summer.png" alt="">
                </div>

                <button @click="Movies" class="viewMore movie-viewmore">VIEW MORE</button>
            </div>

            <div class="each-content content-music">
                <div class="music-posters">
                    <h2>MUSIC</h2>
                </div>

                <div class="musicPosters-all"></div>

                <button @click="Music" class="viewMore music-viewmore">VIEW MORE</button>
            </div>
        </section>
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
    },

    methods: {
        Movies() {
            this.$router.push({ name: 'movie' });
        },

        TvShow() {
            this.$router.push({ name: 'tvshow' })
        },

        Music() {
            this.$router.push({ name: 'music' });
        }
    }
}
</script>