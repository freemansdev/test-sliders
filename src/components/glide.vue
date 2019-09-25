<template>
<div class="container">
  <h1><a href="https://glidejs.com/">Glide</a></h1>
    <div class="glide gallery-top">
      <div data-glide-el="track" class="glide__track">
        <ul class="glide__slides">
          <li class="glide__slide"><img src="https://picsum.photos/id/0/800/600" /></li>
          <li class="glide__slide"><img src="https://picsum.photos/id/1/800/600" /></li>
          <li class="glide__slide"><img src="https://picsum.photos/id/2/800/600" /></li>
          <li class="glide__slide"><img src="https://picsum.photos/id/3/800/600" /></li>
          <li class="glide__slide"><img src="https://picsum.photos/id/4/800/600" /></li>
        </ul>
      </div>
      <div class="glide__bullets" data-glide-el="controls[nav]">
        <button class="glide__bullet" data-glide-dir="=0"></button>
        <button class="glide__bullet" data-glide-dir="=1"></button>
        <button class="glide__bullet" data-glide-dir="=2"></button>
        <button class="glide__bullet" data-glide-dir="=3"></button>
        <button class="glide__bullet" data-glide-dir="=4"></button>
      </div>
      <div class="glide__arrows" data-glide-el="controls">
        <button class="glide__arrow glide__arrow--left" data-glide-dir="<"><</button>
        <button class="glide__arrow glide__arrow--right" data-glide-dir=">">></button>
      </div>
    </div>
</div>
</template>

<script>
import Glide from '@glidejs/glide'
import '@glidejs/glide/dist/css/glide.core.min.css'
import '@glidejs/glide/dist/css/glide.theme.min.css'

export default {
  data () {
    return {}
  },
  mounted() {
    new Glide('.glide', {
      type: 'carousel',
      perView: 1,
      focusAt: 'center',
      breakpoints: {
        800: {
          perView: 2
        },
        480: {
          perView: 1
        }
      }
    }).mount()
  }
}
</script>

<style>
.glide {
  width: 100%;
  margin-left: auto;
  margin-right: auto;
}
.gallery-top {
  width: 800px;
}
</style>