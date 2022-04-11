<template>
    <article class="card-rounded">
        <div class="card-body text-center" @click="navToHome">
            <img class="rounded-circle img-fluid" :src="require('@/assets/images/' + user.avatar)" alt="avatar">
            <h2>{{ user.first_name }}</h2>
            <i class="fa-solid fa-pen-to-square edit-user"></i>
        </div>        
    </article>
</template>

<script>
export default {
    name: "TheUserComponent",

    props: {
        user: Object
    },

    methods: {
        navToHome() {
            this.$router.push({name: "UserHome", params: this.user});
        }
    },
}
</script>
<style>
    @import "@/assets/sass/user.scss";
</style>