<template>
  <div class="home">
    <h1>Home</h1>

    <img src="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/dog-puppy-on-garden-royalty-free-image-1586966191.jpg" alt="">

    <h2>{{msg}}</h2>
    <p>The Best Friends Resource Center is a comprehensive online library where you’ll find information about pet health and training, as well as educational materials and interactive resources for people with pets and rescue workers. Plus, you’ll find helpful toolkits and much more.Best Friends Animal Society is a leading national animal welfare organization dedicated to ending the killing of dogs and cats in America’s shelters. In addition to running lifesaving programs in partnership with over 3,000 animal welfare groups, we have regional centers in New York City, Los Angeles, Atlanta and Salt Lake City, and operate the nation’s largest no-kill sanctuary for companion animals.</p>

  </div>
</template>

<script>
export default {
  name: 'home',
  data() {
    return {
      msg: 'Welcome to Vue.js Dog App'
    }
    
  },
}
</script>

<style scoped>
h1 {
  text-align: center;
  margin: 50px 0px 0px 0px;
}

img{
  float:left;
  max-width: 600px;
  margin: 50px 0px 0px 80px;
}

h2 {
  float:left;
  margin-top: 70px;
  margin-left: 30px;
  font-size: 3.0em;
}

p {
  float: left;
  font-size: 1.2em;
  text-align: left;
  margin-top: 30px;
  margin-left: 30px;
  width: 50%;
}
</style>