<template>
  <div class="about">
    <h1>{{title}}</h1>
    <h2>The Resource Center at Best Friends Animal Society</h2>
    <p>The Best Friends Resource Center is a comprehensive online library where you’ll find information about pet health and training, as well as educational materials and interactive resources for people with pets and rescue workers. Plus, you’ll find helpful toolkits and much more. </p>
    <p>Best Friends Animal Society is a leading national animal welfare organization dedicated to ending the killing of dogs and cats in America’s shelters. In addition to running lifesaving programs in partnership with over 3,000 animal welfare groups, we have regional centers in New York City, Los Angeles, Atlanta and Salt Lake City, and operate the nation’s largest no-kill sanctuary for companion animals. </p>

  </div>
</template>

<script>
export default {
  name: 'about',
  data() {
    return {
      title: 'About'
    }
    
  },
}
</script>

<style scoped>
h1 {
  text-align: center;
  margin: 50px 0px 100px 0px;
}

h2, p {
  text-align: center;
  margin-left: 100px;
  margin-right: 100px;
}
</style>