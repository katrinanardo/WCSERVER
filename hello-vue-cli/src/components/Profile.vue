<template>
  <div id="skills">
    <h1>{{ title }}</h1> <hr>
    <p>Objective: {{objective}}</p>
    <p>Name: {{name}}</p>
    <p>Course: {{course}}</p>
    <p>Specialization: {{specialization}}</p>
    <br/>
  </div>
</template>

<script>
export default {
  name: 'skills',
  data () {
    return {
      title: 'Profile',
      objective: 'Seeking a challenging career with' + 
      'a progressive organization that provides an ' + 
      'opportunity to capitalize my technical skills ' + 
      '& abilities in the field of information technology.',
      name: 'Katrina R. Nardo',
      course: 'Information Technology',
      specialization: 'Web Development'
    }
  }
}
</script>

