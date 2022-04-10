<template>
    <div class="container container-bgrd">
        <img src="@/assets/images/roku-logo-white.jpg" alt="" class="logoRoku">

        <h1 class="greeting">WELCOME TO ROKU FLASH BACK</h1>

        <div class="button-list">
            <button @click="register" class="welcoming register-startingPG" >Register</button>
            <button @click="Login" class="welcoming login-startingPG">log In</button>
        </div>

        <div class="anonymous-btn-box">
            <div class="anonymous-btn">
                <button class="anonymous" @click="GoToApp">Start Without Account</button>
                <p>You can enter without registeration, but you will get any limitation to access contents. For better convenience, register yourself or log in.</p>
            </div>
        </div>
    </div>
</template>

<style>
    @import "@/assets/sass/starting.scss";
</style>

<script>
export default {
    name: 'start',

    methods: {
        GoToApp() {
        this.$router.push({ name: 'movie' });
        },

        register() {
            this.$router.push({ name: 'register' });
        },

        Login() {
            this.$router.push({ name: 'login' });
        }
    }
}
</script>