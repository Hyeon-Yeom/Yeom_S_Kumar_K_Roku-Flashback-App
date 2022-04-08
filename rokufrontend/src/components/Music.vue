<template>
    <div>
        <div class="navBox">
            <Nav />
        </div>

        <div>
            <div class="musicHeading">
                <h2 class="subtitle">MUSIC <br> <span class="spanTag-date-music">1960's - 2000's</span></h2>
                <div class="subtitle-categor">
                    <h3 class="subtitle-date">1960's</h3>
                </div>

                <div class="genres">
                    <p>JAZZ</p>
                    <p>POP</p>
                    <p>FOLK MUSIC</p>
                </div>
            </div>

            <div class="movieHeading">
                <div class="subtitle-categor">
                    <h3 class="subtitle-date">1970's</h3>
                </div>

                <div class="genres">
                    <p>DISCO</p>
                    <p>FUNK</p>
                    <p>SMOOTH JAZZ</p>
                    <p>JAZZ FUSION</p>
                    <p>SOUL</p>
                </div>
            </div>

            <div class="movieHeading">
                <div class="subtitle-categor">
                    <h3 class="subtitle-date">1980's</h3>
                </div>

                <div class="genres">
                    <p>POST-DISCO</p>
                    <p>ITALO DISCO</p>
                    <p>EURO DISCO</p>
                    <p>DANCE-POP</p>
                </div>
            </div>

            <div class="movieHeading">
                <div class="subtitle-categor">
                    <h3 class="subtitle-date">1990's</h3>
                </div>

                <div class="genres">
                    <p>GRUNGE</p>
                    <p>BRITPOP</p>
                    <p>INDUSTRIAL ROCK</p>
                    <p>ALTERNATIVE ROCK</p>
                    <p>NU METAL</p>
                </div>
            </div>

            <div class="movieHeading">
                <div class="subtitle-categor">
                    <h3 class="subtitle-date">2000's</h3>
                </div>

                <div class="genres">
                    <p>POST-GRUNGE</p>
                    <p>POST-BRITPOP</p>
                    <p>NU METAL</p>
                    <p>POP PUNK</p>
                    <p>EMO</p>
                    <p>POST-HARDCORE</p>
                    <p>METALCORE</p>
                    <p>INDIE ROCK</p>
                </div>
            </div>
        </div>
    </div>
</template>

<style>
@import "@/assets/sass/music.scss";
</style>

<script>
import Nav from "@/components/Nav.vue";

export default {
    name: 'music',

    components: {
        Nav
    }
}
</script>