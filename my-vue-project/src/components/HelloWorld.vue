<template>
<div class="sideLeft"></div>
<div class="sideRight"></div>
  <div class="header">
    <h2>Menu</h2>
  </div>
    <div class="background"> 
      <div class="bk"></div>
        <div class="item">
      <span class="number">1.</span>
      <span class="price">90kr</span>
      <span class="name">Pizza Margarita</span>
<div class="toppings">Cheese, Tomato, Basil</div>
      <span class="number">2.</span>
      <span class="price">130kr</span>
      <span class="name">Pizza Quattro Formaggi</span>
      <div class="toppings">Mozarella, Gorgonzola, Emmentaler, Provolone </div>
      <span class="number">3.</span>
      <span class="price">115kr</span>
      <span class="name">Pepperoni Pizza </span>
      <div class="toppings">Cheese, Pepperoni </div>
      <span class="number">4.</span>
      <span class="price">150kr</span>
      <span class="name">Meat Lover</span>
      <div class="toppings">Cheese, Beef, bacon, ham </div>
      <span class="number">5.</span>
      <span class="price">120kr</span>
      <span class="name">Veggi surprise</span>
      <div class="toppings">Aubergine, Peppers, artichoke, Corn </div>
      </div>
      <button @click="goToProfile">Router testing</button> 
</div>
</template>
<script>
export default {
  methods: {
    goToProfile() {
      console.log("triggered");
      this.$router.push('/profile');
    }
  }
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.background {
  background-color: black;
  width: 70%;
  margin-left: 15%;
  margin-right: 15%;
  height: 100vh;
  padding:20px;
  box-sizing: content-box;
  overflow: hidden;
}
.bk {
  background-image: url(../assets/csm.jpg);
  padding-bottom: 100px;
  width: 70%;
  height: 10%;
  margin-left: 15%;
  margin-right: 15%;
  background-repeat: no-repeat;
  background-position: center;
  margin: 0 auto;
  margin-bottom: 20px;
}
.price {
 color: white;
 float: right;
 font-size: 30px;
 margin-right: 15%;
}
.name {
  color: white;
  font-size: 30px;
  text-align: center;
}
.toppings {
  color: white;
  border-bottom: 3px dotted #ffffff;
  text-align: center;
  margin-left: 15%;
  margin-right: 15%;
  margin-bottom: 14px;
  padding-bottom: 7px;
}
.number {
  color: white;
  font-size: 30px;
  float: left;
  padding-left: 4%;
  margin-left: 15%;
}
.header{
  color: white;
  border-bottom: 10px dotted #ffffff;
  padding-bottom: 10px;
  width: 40%;
  margin-left: 30%;
  margin-right: 30%;
}  
.sideLeft{
  background-image: url(../assets/tokyoLeft.jpeg);
  background-size: cover;
  width: 15%;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0%;
  z-index: 1; /* Make sure the sidebar is on top */
}
.sideRight{
  background-image: url(../assets/tokyoRight.jpeg);
  background-size: cover;
  width: 15%;
  height: 100vh;
  position: fixed;
  background-repeat: no-repeat;
  top: 0;
  right: 0%;
  z-index: 1; /* Make sure the sidebar is on top */
}
body, html {
  margin: 0;
  padding: 0;
  height: 100%;
  overflow: hidden; /* Prevents scrolling and extra space */
}
</style>
