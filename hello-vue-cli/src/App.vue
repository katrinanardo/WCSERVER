<template>
  <div id="app">
    
    <profile></profile>
    <education></education> <br/>
    <skills></skills> <br/>

  </div>
</template>

<script>
import Education from './components/Education.vue'
import Profile from './components/Profile.vue'
import Skills from './components/Skills.vue'

export default {
  name: 'app',
  components: {
    Profile,
    Education,
    Skills
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: left;
  color: #2c3e50;
  margin-top: 20px;
  margin-left: 10px;
  
}

*{
  background-color: aliceblue;
}

h1, h2 {
  font-weight: normal;
}

p {
  width: 60%;
}

hr {
  width: 60%;
  margin-left: 0;
}


table, th, td {
  border-collapse: collapse;
  border: solid rgba(0, 0, 0, 0.247) 0.5px;
  padding: 10px;
  font-weight: 200;
}
</style>
