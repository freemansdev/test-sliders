<template>
<div class="container">
  <h1>Slick</h1>
  <div class="wrap">
    <div class="slider">
      <div><img data-lazy="https://pawelgrzybek.com/siema/assets/siema--pink.svg" alt="Siema image" /></div>
      <div><img data-lazy="https://pawelgrzybek.com/siema/assets/siema--yellow.svg" alt="Siema image" /></div>
      <div><img data-lazy="https://pawelgrzybek.com/siema/assets/siema--pink.svg" alt="Siema image" /></div>
      <div><img data-lazy="https://pawelgrzybek.com/siema/assets/siema--yellow.svg" alt="Siema image" /></div>
      <div><img data-lazy="https://pawelgrzybek.com/siema/assets/siema--pink.svg" alt="Siema image" /></div>
      <div><img data-lazy="https://pawelgrzybek.com/siema/assets/siema--yellow.svg" alt="Siema image" /></div>
      <div><img data-lazy="https://pawelgrzybek.com/siema/assets/siema--pink.svg" alt="Siema image" /></div>
      <div><img data-lazy="https://pawelgrzybek.com/siema/assets/siema--yellow.svg" alt="Siema image" /></div>
    </div>
  </div>
</div>
</template>

<script>
import $ from 'jquery'
import 'slick-carousel'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

export default {
  data () {
    return {}
  },
  mounted() {
    $('.slider').slick({
      dots: true,
      infinite: true,
      speed: 300,
      slidesToShow: 1,
      centerMode: true,
      variableWidth: true
    });
  }  
}
</script>

<style>
.wrap {
  display: flex;
  justify-content: center;
}
.slider{
  width: 50%;
}
</style>