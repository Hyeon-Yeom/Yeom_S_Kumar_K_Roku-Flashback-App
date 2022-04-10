<template>
    <section>
        <!-- <h1>Welcome {{first_name}}!</h1> -->

        <!-- custom movie components go here in a grid container - show the current selection -->
        <section class="movie-container">
            <!-- custom movie article component for the text data -->
            <MovieData
                :movies_title="currentMovie.movies_title"
                :movies_storyline="currentMovie.movies_storyline"
                :movies_runtime="currentMovie.movies_runtime"
                :movies_year="currentMovie.movies_year"
            ></MovieData>

            <!-- movie player component -->
            <MoviePlayer
                @loadnew="reloadPlayer"
                :movies_trailer="currentMovie.movies_trailer"
            ></MoviePlayer>
        </section>

        <!-- show the list of movies retrieved - in a grid -->
        <!-- TODO - could show these in a filtered row by genre -->
        <section class="movie-thumbs">
            <MovieThumb
                v-for="movie in movies"
                :key="movie.movies_id"
                :thumb="movie.movies_cover"
                @click="setCurrentMovie(movie)"
            ></MovieThumb>
        </section>        
    </section>    
</template>

<script>
import MovieData from "@/components/MovieData.vue";
import MoviePlayer from "@/components/MoviePlayer.vue";
import MovieThumb from "@/components/MovieThumb.vue";

export default {
    name: "TheHomeView",

    props: {
        first_name: String,
        role: Number,
        permissions: Number,
        avatar: String,
        loggedin: Boolean
    }, 

    created() {
        fetch('/movies')
            .then(res => res.json())
            .then(data => {
                console.log(data);

                // store the movies in Vue instance              
                this.movies = data[0];

                // pick a random movie 
                this.currentMovie = data[0][Math.floor(Math.random() * data[0].length)];
            })
        .catch(err => console.err(err));
    },

    data() {
        return {
            movies: [],
            currentMovie: {},
        }
    },

    methods: {
        setCurrentMovie(movie) {
            this.currentMovie = movie;
        },

        reloadPlayer() {
            this.setCurrentMovie(this.movies[Math.floor(Math.random() * this.movies.length - 1)]);
        }
    },

    components: {
        MovieData,
        MoviePlayer,
        MovieThumb
    }
}
</script>

<style>
    @import "@/assets/sass/homepage.scss";
</style>