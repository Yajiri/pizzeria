<template>
  <div class="JensPizzeria"><h1 class="italianno-regular">Jens Pizzeria</h1></div>
  <div id='app' class= background>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'App',
}
</script>

<style>
body{
  margin: 0;
  cursor: url(~@/assets/cursor.cur) 16 16, auto;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
.background{
  background-color: black;
}
.JensPizzeria{
  color: rgb(255, 0, 0); 
  background-color: black;
  padding-top: 5px;
  font-size: x-large;
  border-bottom: white solid 3px;
  border-color: rgb(255, 0, 0);
}
  .italianno-regular {
  font-family: "Italianno", cursive;
  font-weight: 400;
  font-style: normal;
  font-size: 300%
}
button{
  float:left;
  margin-left: 15%;
  margin-top: 5%;
  background-color: aquamarine;
  font-size: 15px;
  padding: 10px;
  cursor: url(~@/assets/cursor.cur) 16 16, auto;
}
a, input, textarea {
  cursor: url(~@/assets/cursor.cur), auto; /* Custom cursor for links and inputs */
} /*currently not in use but if I ever want to add them then the mouse icon won't change there etiher in the future.*/
</style>
