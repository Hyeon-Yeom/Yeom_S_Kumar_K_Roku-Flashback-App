<template>
    <section>
        <div class="users">
            <h1 class="users-headline text-center">Who's Using Roku?</h1>

            <section class="users-container">
                <User class="user-panel"
                    v-for="user in users"
                    :key="user.id"
                    :user="user"
                ></User>
            </section>
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
import User from "@/components/User.vue"

export default {
    name: 'userselect',

    props: {
        loggedin: Boolean,
        role: Number
    },

    created() {
        console.log('auth:', this.loggedin);

        fetch('/users/getall')
            .then(res => res.json())
            .then(data => {
                console.log(data);
                this.users = data;
            })
        .catch(err => console.error(err));
    },

    data() {
        return {
            users: []
        }
    },

    components: {
        User
    },

    methods: {
        GoToApp() {
        this.$router.push({ name: 'movie' });
        }
    }
}
</script>
<style>
    @import "@/assets/sass/userselect.scss";
</style>