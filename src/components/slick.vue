<template>
<div>
  <h1>Slick</h1>
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
      lazyLoad: 'ondemand',
      slidesToShow: 3,
      slidesToScroll: 1
    });
  }  
}
</script>
