<template>
    <div>
        <div class="subscribe-container">
            <div class="logoSubscribe">
                <img @click="backToHome" src="@/assets/images/roku-logo-white.jpg" alt="">
            </div>

            <div class="current-subscribe">
                <p class="subscribe-text-1">YOU'RE CURRENTLY USING</p>
                <p @click="subscribeOptions" class="subsribe-text-2">STANDARD.</p>
            </div>

            <p class="next-payDate">NEXT PAY: 2020.JAN.01</p>
        </div>

        <div class="subscribe-option">
            <p class="subscribeOptions" @click="subscribeOptions">WOULD YOU LIKE TO CHANGE YOUR PLAN?</p>
            <p class="or">or</p>
            <p class="goBack-text" @click="goBack">GO BACK</p>
        </div>
    </div>
</template>

<style>
@import "@/assets/sass/subscribe.scss";
</style>

<script>
export default {
    name: 'subscribe',

    methods: {
        backToHome() {
            this.$router.push({ name: 'start' });
        },

        subscribeOptions() {
            this.$router.push({ name: 'subscribeOptions' })
        },

        goBack() {
            this.$router.push({ name: 'movie' });
        }
    }
}
</script>