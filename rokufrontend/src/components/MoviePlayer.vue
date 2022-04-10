<template>
    <video controls muted
        v-if="movies_trailer" 
        :src="require('@/assets/video/' + movies_trailer)"
        @canplaythrough="playVideo"
        @ended="loadNewClip"
    ></video>
</template>

<script>
export default {
    name: "TheVideoPlayer",

    props: {
        movies_trailer: String
    },

    methods: {
        playVideo(event) {
            console.log('playing video');
            event.currentTarget.play();
            event.currentTarget.muted = false;
        },

        loadNewClip() {
            this.$emit('loadnew');
        }
    }
}
</script>