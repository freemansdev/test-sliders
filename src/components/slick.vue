<template>
<div class="container">
  <h1><a href="http://kenwheeler.github.io/slick/">Slick</a></h1>
  <div class="wrap">
    <div class="slider">
      <div><img data-lazy="https://picsum.photos/id/0/800/600" /></div>
      <div><img data-lazy="https://picsum.photos/id/1/800/600" /></div>
      <div><img data-lazy="https://picsum.photos/id/2/800/600" /></div>
      <div><img data-lazy="https://picsum.photos/id/3/800/600" /></div>
      <div><img data-lazy="https://picsum.photos/id/4/800/600" /></div>
      <div><img data-lazy="https://picsum.photos/id/5/800/600" /></div>
      <div><img data-lazy="https://picsum.photos/id/6/800/600" /></div>
      <div><img data-lazy="https://picsum.photos/id/7/800/600" /></div>
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
  width: 70%;
}
</style>