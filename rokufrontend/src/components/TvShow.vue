<template>
    <div>
        <div class="navBox">
            <Nav />
        </div>

        <div class="tvshow-not-availble">
            <div class="center">
                <div class="wave"></div>
                <div class="wave"></div>
                <div class="wave"></div>
                <div class="wave"></div>
                <div class="wave"></div>
                <div class="wave"></div>
                <div class="wave"></div>
                <div class="wave"></div>
                <div class="wave"></div>
                <div class="wave"></div>
            </div>

            <div class="announcing animate-bottom" id="texts">
                <p>It's Under The Construction.<br>We Will Come Back Soon. Sorry For inconvenience.</p>
            </div>
        </div>
    </div>
</template>

<style>
@import "@/assets/sass/tvshow.scss";
</style>

<script>
import Nav from "@/components/Nav.vue";

export default {
    name: 'tvshow',

    components: {
        Nav
    }
}
</script>