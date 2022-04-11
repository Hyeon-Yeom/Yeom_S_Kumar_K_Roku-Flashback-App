<template>
    <div class="containerRegister">
        <div>
            <div class="logoRegister">
                <img @click="backToHome"  class="logoRokuRegister" src="@/assets/images/roku-logo-white.jpg" alt="">
            </div>

            <h2 class="login-flash" v-if="signup">{{ flash }}</h2>
            <h2 class="login-flash" v-if="errors">{{ flash }}</h2>

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

                    <button
                    class="btn"
                    @click="trySignUp"
                    type="submit"
                    >Register</button>
                </form>
            </div>

            <div class="asking">
                <div class="registered">
                    <h3>HAVE YOU BEEN ALREADY REGISTERED?</h3>
                    <button
                    @click="Login"
                    class="registered-btn"
                    >Enter</button>
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
            signup: false,
            errors: false,
            flash: ''
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
        },

        Login() {
            this.$router.push({ name: 'login' });
        },

        trySignUp() {
        this.url = 'users/signup';
        this.login();
        },

        goToUsers(time, vm, role) {
        setTimeout(function() {
            vm.$emit('setauth', { status: true, role: role});
            vm.$router.push({ name: 'UserSelect'});
        }, time)
        },

        login() {

        let url = this.url;

        fetch(url, {
            method: 'POST',
            headers: {
            "Content-type" : "application/json"
            }
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                
                switch (data.action) {
                //  login failed -> user does not exist
                case 'add':
                    this.signup = true;
                    this.first_name = '',
                    this.last_name = '',
                    this.password = '',
                    this.password_confirm = '',
                    this.flash = `Hmmm... your username doesn't seem to exist. Do you want to sign up? Or you can try again.`;
                    break;

                // successfully added a user
                case 'added':
                    this.flash = 'Added you to Roku Flashback! Enjoy! ... redirecting ...';
                    this.goToUsers(2500, this, data.role);
                    break;

                // login failed b/c wrong username or password
                case 'retry':
                    document.querySelector(`input[type=${data.field}]`).classList.add('error');
                    console.log('retry');
                    this.errors = true;
                    this.flash = `Your login info is not correct. Please retry.`;
                    break;

                // login successful -> user authenticated
                default:
                    this.goToUsers(0, this, data.role);
                }
            })
        .catch((error) => console.error(error));
        }
    }
}
</script>