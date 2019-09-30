<template>
<div class="container">
    <h1><a href="http://loryjs.github.io/lory">Lory</a></h1>
    <div class="flex-container">
    <ul class="features">
      <li v-for="item in items" class="icon" :class="item.feature">{{item.text}}</li>
      <li class="icon sleep">Build: <span class="white">Compleat</span>, Modular</li>
      <li class="icon check">lightweight (<b class="white">3kb</b> gzipped)</li>
    </ul>
    </div>
    <div ref="slider" class="slider js_slider">
        <div class="frame js_frame">
            <ul class="slides js_slides">
                <li class="js_slide"><img src="https://picsum.photos/id/1/800/600"></li>
                <li class="js_slide">
                  <dfp-slot data-title="Ad" path="/21737763597/adunit-1" :size="[320, 100]" id="div-gpt-ad-1559997122392-0"/>
                </li>
                <li class="js_slide"><img src="https://picsum.photos/id/1/800/600"></li>
                <li class="js_slide"><img src="https://picsum.photos/id/1/800/600"></li>
                <li class="js_slide">
                <iframe class="youtube-player" type="text/html" width="800" height="600"
                  src="http://www.youtube.com/embed/bZSM5ZbdpWw" frameborder="0">
                </iframe>
                </li>
                <li class="js_slide"><img src="https://picsum.photos/id/1/800/600"></li>
                <li class="js_slide"><img src="https://picsum.photos/id/1/800/600"></li>
            </ul>
        </div>
        <span class="js_prev prev">
            <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 501.5 501.5"><g><path fill="#2E435A" d="M302.67 90.877l55.77 55.508L254.575 250.75 358.44 355.116l-55.77 55.506L143.56 250.75z"/></g></svg>
        </span>
        <span class="js_next next">
            <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 501.5 501.5"><g><path fill="#2E435A" d="M199.33 410.622l-55.77-55.508L247.425 250.75 143.56 146.384l55.77-55.507L358.44 250.75z"/></g></svg>
        </span>
    </div>
</div>
</template>

<script>
import {lory} from 'lory.js'
import {FeatureList} from '../Features'
import DfpSlot from './DfpSlot.vue'

let Features = new FeatureList()
Features.get(2).feature = 'uncheck'
Features.get(5).feature = 'uncheck'

export default {
  name: 'Lory',
  components: {
    DfpSlot
  },
  data () {
    return {
      items : Features.items
    }
  },
  mounted() {
    lory(this.$refs.slider, {
        'rewind': true
    })
  }  
}
</script>

<style>
@import url(../main.css);
/**
 * (optional) define here the style definitions which should be applied on the slider container
 * e.g. width including further controls like arrows etc.
 */
.slider {
  width: 880px;
  position: relative;
  margin-left: auto;
  margin-right: auto;
}

.frame {
    /**
     * (optional) wrapper width, specifies width of the slider frame.
     */
    width: 880px;
    position: relative;
    font-size: 0;
    line-height: 0;
    overflow: hidden;
    white-space: nowrap;
}

.slides {
    display: inline-block;
}

.slides li {
    position: relative;
    display: inline-block;

    /**
     * (optional) if the content inside the slide element has a defined size.
     */
    width: 880px;
}

.prev, .next {
    position: absolute;
    top: 50%;
    margin-top: -25px;
    display: block;
    cursor: pointer;
}

.next {
    right: 0;
}

.prev {
    left: 0;
}

.next svg, .prev svg {
    width: 25px;
}
</style>