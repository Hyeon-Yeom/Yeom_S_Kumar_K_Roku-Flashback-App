<template>
    <div>
        <div class="navBox">
            <Nav />
        </div>

        <div>
            <div class="musicHeading">
                <h2 class="subtitle">MUSIC <br> <span class="spanTag-date">1960's - 2000's</span></h2>
                <div class="subtitle-categor">
                    <h3 class="subtitle-date">1960's</h3>
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