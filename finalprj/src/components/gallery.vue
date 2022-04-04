<template>
  <div class="gallery">
    <h1>{{title}}</h1>
<div class="container">
  <div class="row">
    <div class="col"><img src="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/dog-puppy-on-garden-royalty-free-image-1586966191.jpg?crop=1.00xw:0.669xh;0,0.190xh&resize=1200:*" alt=""></div>
    <div class="col"><img src="https://www.thesprucepets.com/thmb/k3NXIqobAKvxoQ2ozGcwPxzIkpI=/3300x1856/smart/filters:no_upscale()/most-obedient-dog-breeds-4796922-hero-4440a0ccec0e42c98c5e58821fc9f165.jpg" alt=""></div>
    <div class="w-100"></div>
    <div class="col"><img src="https://image.cnbcfm.com/api/v1/image/105992231-1561667465295gettyimages-521697453.jpeg?v=1561667497&w=1600&h=900" alt=""></div>
    <div class="col"><img src="https://www.rd.com/wp-content/uploads/2021/06/GettyImages-1205998407-e1624731290663.jpg?fit=700,1024" alt=""></div>
  </div>
</div>
  </div>
</template>

<script>
export default {
  name: 'gallery',
  data() {
    return {
      title: 'Gallery'
    }
    
  },
}
</script>

<style scoped>
h1 {
  text-align: center;
  margin: 50px 0px 30px 0px;
}

.container{
  margin: 70px 0px 50px 50px;
}

img{
  max-width: 60%;
}

.col {
  padding-bottom: 30px;
  margin-right: 50px;
}

</style>