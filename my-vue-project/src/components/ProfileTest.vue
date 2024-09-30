<template>
    <div class="background">
        <h1><ab>Profile</ab></h1>
        <button id="pb" @click="BackToMenu">Back</button>
    </div>
</template>

<script>
export default{
    methods:{
        BackToMenu() {
            this.$router.push('/')
        }
    }
}
</script>

<style>
html, body{
    margin: 0;
    height: 100%;
    padding: 0;
}
.background{
    background-color: black;
    height: 100vh; /* Set height to full viewport height */
    padding-top: 25px;
}
ab {
    color: white;
}
#pb{
    float: left;
    margin-left: 48.5%;
    background-color: black;
    color: rgb(255, 0, 0);
    border-color: white;
}
</style>