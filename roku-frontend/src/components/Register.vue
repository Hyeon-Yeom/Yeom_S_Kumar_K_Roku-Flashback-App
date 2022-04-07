<template>
    <div class="containerRegister">
        <div>
            <div class="logoRegister">
                <img @click="backToHome"  class="logoRokuRegister" src="@/assets/images/roku-logo-white.jpg" alt="">
            </div>

            <div class="registerForm">
                <form>
                    <div class="form-group">
                        <label>FIRST NAME</label>
                        <input type="text" class="form-control" v-model="first_name" placeholder="Type Your First Name">
                    </div>

                    <div class="form-group">
                        <label>LAST NAME</label>
                        <input type="text" class="form-control" v-model="last_name" placeholder="Type Your Last Name">
                    </div>

                    <div class="form-group">
                        <label>PASSWORD</label>
                        <input type="password" v-model="password" placeholder="Type The Password">
                    </div>

                    <div class="confirming form-group">
                        <label>CONFIRM PASSWORD</label>
                        <input type="password" v-model="password_confirm" placeholder="Confirm The Password Once Again">
                    </div>

                    <button class="btn">Register</button>
                </form>
            </div>

            <div class="asking">
                <div class="registered">
                    <h3>HAVE YOU BEEN ALREADY REGISTERED?</h3>
                    <button @click="Accounts" class="registered-btn">Enter</button>
                </div>
            </div>

            <div class="anonymous-btn-box">
            <div class="anonymous-btn">
                <button class="anonymous" @click="GoToApp">Start Without Account</button>
                <p>You can enter without registeration, but you will get any limitation to access contents. For better convenience, register yourself or log in.</p>
            </div>
        </div>
        </div>
        
    </div>
</template>

<style>
@import "@/assets/sass/register.scss";
</style>

<script>
export default {
    name: 'register',

    data() {
        return {
            first_name: '',
            last_name: '',
            password: '',
            password_confirm: '',
        };
    },

    methods: {
        goToHome() {
            this.$router.push({ name: "movie" });
        },

        backToHome() {
            this.$router.push({ name: 'start' });
        },

        GoToApp() {
        this.$router.push({ name: 'movie' });
        }
    }
}
</script>