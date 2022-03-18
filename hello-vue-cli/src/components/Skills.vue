<template>
  <div id="skills">
    <h1>{{title3}}</h1> <hr>
    <p>Training: {{training}}</p>
    <p>Seminars: {{seminar}}</p>
    <p>Technologies: {{technologies}}</p>
    <p>Programming Languages: {{proglang}}</p>
  </div>
</template>

<script>
export default {
  name: 'skills',
  data () {
    return {
      title3: 'Skills',
      training: '-',
      seminar: 'Philippine ICT Talent Online Summit 2020 & Learn On Program',
      technologies: '-',
      proglang: 'JavaScript, HTML, CSS, PHP'
    }
  },
}
</script>

