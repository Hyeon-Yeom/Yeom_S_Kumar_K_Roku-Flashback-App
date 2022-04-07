<template>
    <div>
        <div class="navBox">
            <Nav />
        </div>

        <div></div>
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