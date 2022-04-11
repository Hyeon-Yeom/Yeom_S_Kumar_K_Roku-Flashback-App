<template>
    <div>
        <div class="logoPromotion">
            <img @click="backToHome" src="@/assets/images/roku-logo-white.jpg" alt="">
        </div>

        <div class="promotion-options">
            <div class="promotion-nav">
                    <div class="promotion-op basic">
                        <h2>BASIC</h2>
                        <p>8.99$/MONTH</p>
                    </div>

                    <div class="promotion-op standard">
                        <h2>STANDARD</h2>
                        <p>11.98$/MONTH</p>
                    </div>

                    <div class="promotion-op basic">
                        <h2>PREMIUM</h2>
                        <p>14.99$/MONTH</p>
                    </div>
            </div>

            <div class="detailedInfo">
                <div class="detailed resolution">
                    <h3>RESOLUTION</h3>
                    <div>
                        <p>480P</p>
                        <p class="des">720P/1080P</p>
                        <p>4K + HDR</p>
                    </div>
                </div>

                <div class="detailed video-quality">
                    <h3>VIDEO QUALITY</h3>
                    <div>
                        <p>GOOD</p>
                        <p>BETTER</p>
                        <p>BEST</p>
                    </div>
                </div>

                <div class="detailed devices">
                    <h3>AVAILABLE DEVICES TO WATCH</h3>
                    <div>
                        <p>1 DEVICE</p>
                        <p>3 DEVICES</p>
                        <p>4 DEVICES</p>
                    </div>
                </div>

                <div class="detailed unlimited">
                    <h3>UNLIMITED MOVIES, TV SHOWS, MUSIC</h3>
                    <div>
                        <p class="checkmark">&#10003;</p>
                        <p class="checkmark">&#10003;</p>
                        <p class="checkmark">&#10003;</p>
                    </div>
                </div>
            </div>
        </div>

        <button @click="goBack" class="back">BACK</button>
    </div>
</template>

<style>
@import "@/assets/sass/subscribeOptions.scss";
</style>

<script>
export default {
    name: 'subscribeOptions',

    methods: {
        backToHome() {
            this.$router.push({ name: 'start' });
        },

        goBack() {
            this.$router.push({ name: 'movie' });
        }
    }
}
</script>