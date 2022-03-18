<template>
  <div id="education">
    <h1>{{ title2 }}</h1> <hr>

    <table>
      <tr>
        <th>Elementary</th>
        <th>{{elementary}}</th>
        
      </tr>

      <tr>
        <th>JHS/SHS</th>
        <th>{{highschool}}</th>
      </tr>

      <tr>
        <th>College</th>
        <th>{{college}}</th>
      </tr>
    </table>


  </div>
</template>

<script>
export default {
  name: 'education',
  data () {
    return {
      title2: 'Education',
      elementary: 'Air Force City Education Center (2006 - 2013)',
      highschool: 'Holy Angel University (2014 - 2019)',
      college: 'Holy Angel University (2020 - CURRENT)'
    }
  }
}
</script>