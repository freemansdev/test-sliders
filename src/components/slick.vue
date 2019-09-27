<template>
<div class="container">
  <h1><a href="http://kenwheeler.github.io/slick/">Slick</a></h1>
  <div class="flex-container">
  <ul class="features">
    <li v-for="item in items" class="icon" :class="item.feature">{{item.text}}</li>
    <li class="icon sleep">Build: <span class="white">Compleat</span>, Modular</li>
    <li class="icon sleep">lightweight (<b class="white">>10kb</b> gzipped)</li>
  </ul>
  </div>
  <div class="wrap">
    <div class="slider">
      <div><img data-lazy="https://picsum.photos/id/0/800/600" /></div>
      <div><img data-lazy="https://picsum.photos/id/1/800/600" /></div>
      <dfp-slot data-title="Ad" path="/21737763597/adunit-1" :size="[320, 100]" id="div-gpt-ad-1559997122392-0"/>
      <div><img data-lazy="https://picsum.photos/id/3/800/600" /></div>
      <div><img data-lazy="https://picsum.photos/id/4/800/600" /></div>
      <div>
        <iframe class="youtube-player" type="text/html" width="800" height="600"
          src="http://www.youtube.com/embed/bZSM5ZbdpWw" frameborder="0">
        </iframe>
      </div>
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
import {FeatureList} from '../Features'
import DfpSlot from './DfpSlot.vue'

let Features = new FeatureList()


export default {
  name: 'Slick',
  components: {
    DfpSlot
  },
  data () {
    return {
      items : Features.items
    }
  },
  mounted() {
    $('.slider').slick({
      dots: true,
      infinite: true,
      speed: 300,
      slidesToShow: 1,
      centerMode: true,
      variableWidth: true
    })
  }
}
</script>

<style>
@import url(../main.css);

.wrap {
  display: flex;
  justify-content: center;
}
.slider{
  width: 50%;
}
</style>
