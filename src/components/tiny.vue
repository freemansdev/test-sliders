<template>
<div class="container">
    <h1><a href="https://github.com/ganlanyuan/tiny-slider">Tiny Slider</a></h1>
    <div class="flex-container">
    <ul class="features">
      <li v-for="item in items" class="icon" :class="item.feature">{{item.text}}</li>
      <li class="icon sleep">Build: <span class="white">Compleat</span>, Modular</li>
      <li class="icon sleep">lightweight (<b class="white">~13kb</b> gzipped)</li>
    </ul>
    </div>
    <div ref="slider" class="slider">
      <div><img class="tns-lazy-img" data-src="https://picsum.photos/id/1/800/600"></div>
      <div><img class="tns-lazy-img" data-src="https://picsum.photos/id/2/800/600"></div>
      <dfp-slot data-title="Ad" path="/21737763597/adunit-1" :size="[320, 100]" id="div-gpt-ad-1559997122392-0"/>
      <div>
        <iframe class="youtube-player" type="text/html" width="800" height="600"
          src="http://www.youtube.com/embed/bZSM5ZbdpWw" frameborder="0">
        </iframe>
      </div>
      <div><img class="tns-lazy-img" data-src="https://picsum.photos/id/3/800/600"></div>
      <div><img class="tns-lazy-img" data-src="https://picsum.photos/id/4/800/600"></div>
      <div><img class="tns-lazy-img" data-src="https://picsum.photos/id/5/800/600"></div>
    </div>
    <div class="customize-tools">
      <ul class="thumbnails" id="customize-thumbnails">
        <li> <img src="https://picsum.photos/id/1/150/70"></li>
        <li> <img src="https://picsum.photos/id/2/150/70"></li>
        <li> <img src="https://picsum.photos/id/3/150/70"></li>
        <li> <img src="https://picsum.photos/id/4/150/70"></li>
        <li> <img src="https://picsum.photos/id/5/150/70"></li>
        <li> <img src="https://picsum.photos/id/6/150/70"></li>
        <li> <img src="https://picsum.photos/id/7/150/70"></li>
      </ul>
    </div>
</div>
</template>

<script>
import { tns } from "../../node_modules/tiny-slider/src/tiny-slider"
import {FeatureList} from '../Features'
import DfpSlot from './DfpSlot.vue'

let Features = new FeatureList()

export default {
  name: 'Tiny',
  components: {
    DfpSlot
  },
  data () {
    return {
      items : Features.items
    }
  },
  mounted() {
    var slider = tns({
      container: '.slider',
      navContainer: '#customize-thumbnails',
      navAsThumbnails: true,
      autoplayHoverPause: true,
      rewind: true,
      mouseDrag: true,
      lazyload: true,
    })
  }
}
</script>

<style>
@import url(../main.css);
@import url(../../node_modules/tiny-slider/dist/tiny-slider.css);
</style>