<template>
  <section class="login-container">

    <div class="login-heading">
        <h1>Welcome to Flashblack!</h1>
        <p class="lead">
        Before revisiting your favourite movies, tv shows or music, please log in with a valid username and password.<br>If you don't have your accound yet, please register yourself through the below button.
        </p>
    </div>

    <h2 class="login-flash" v-if="signup">{{ flash }}</h2>
    <h2 class="login-flash" v-if="errors">{{ flash }}</h2>

    <section class="log-in">
      <label class="sr-only" for="inlineFormInputName">NAME</label>
      <input v-model="username" type="text" class="form-control" id="inlineFormInputName" placeholder="Type Your Username" required>

      <label class="sr-only" for="inlineFormPassword">PASSWORD</label>
      <input v-model="password" type="password" class="form-control" id="inlineFormPassword" placeholder="Type Your Password" required>
    </section>

    <!-- <button
        v-if="signup"
        type="submit" 
        class="btn btn-primary login-submit signup"
        @click="trySignUp"
      >Sign Up
    </button> -->

    <button
        type="submit" 
        class="btn btn-primary login-submit"
        @click="tryLogin"
      >Enter
    </button>

    <div class="goToRegisteration">
      <p>If you don't have your account yet, register yourself!</p>
      <button class="register-register" @click="register">Register Myself</button>
    </div>

    <div class="anonymous-btn-box">
      <div class="anonymous-btn">
        <button class="anonymous" @click="GoToApp">Start Without Account</button>
        <p>You can enter without registeration, but you will get any limitation to access contents. For better convenience, register yourself or log in.</p>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'login',

  data() {
    return {
      username: '',
      password: '',
      url: 'users/getone',
      signup: false,
      errors: false,
      flash: ''
    }
  },

  methods: {
    tryLogin() { 
      this.url = 'users/getone';
      this.login();
    },

    GoToApp() {
        this.$router.push({ name: 'movie' });
    },

    register() {
            this.$router.push({ name: 'register' });
    },

    goToUsers(time, vm, role) {
      setTimeout(function() {
        vm.$emit('setauth', { status: true, role: role});
        vm.$router.push({ name: 'UserSelect'});
      }, time)
    },

    login() {
      // hit the back end UMS with a user name and password
      let formData = { username: this. username, password: this.password }

      let url = this.url;

      fetch(url, {
        method: 'POST',
        headers: {
          "Content-type" : "application/json"
        },
        body: JSON.stringify(formData)
      })
      .then(res => res.json())
      .then(data => {
        console.log(data);
        
        switch (data.action) {
          //  login failed -> user does not exist
          case 'add':
            this.signup = true;
            this.username = '';
            this.password = '';
            this.flash = `Hmmm... your username doesn't seem to exist. Do you want to sign up? Or you can try again.`;
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

<style>
  @import "@/assets/sass/login.scss";
</style>
