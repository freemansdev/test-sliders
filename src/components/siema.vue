<template>
<div class="container">
    <h1><a href="https://pawelgrzybek.github.io/siema/">Siema</a></h1>
    <div class="flex-container">
    <ul class="features">
      <li v-for="item in items" class="icon" :class="item.feature">{{item.text}}</li>
      <li class="icon sleep">Build: <span class="white">Compleat</span>, Modular</li>
      <li class="icon check">lightweight (<b class="white">3kb</b> gzipped)</li>
    </ul>
    </div>
    <div id="slider1" ref="slider1">
        <div data-title="Image" ><img class="img" src="https://pawelgrzybek.com/siema/assets/siema--pink.svg" alt="Siema image" /></div>
        <dfp-slot data-title="Ad" path="/21737763597/adunit-1" :size="[320, 100]" id="div-gpt-ad-1559997122392-0"/>
        <div data-title="Image"><img class="img" src="https://pawelgrzybek.com/siema/assets/siema--yellow.svg" alt="Siema image" /></div>
        <div data-title="Video">
          <iframe class="youtube-player" type="text/html" width="800" height="600"
            src="http://www.youtube.com/embed/bZSM5ZbdpWw" frameborder="0">
          </iframe>
        </div>
        <div data-title="Image"><img class="img" src="https://pawelgrzybek.com/siema/assets/siema--pink.svg" alt="Siema image" /></div>
        <div data-title="Image"><img class="img" src="https://pawelgrzybek.com/siema/assets/siema--yellow.svg" alt="Siema image" /></div>
    </div>
</div>
</template>

<script>
import Siema from 'siema'
import {FeatureList} from '../Features'
import DfpSlot from './DfpSlot.vue'

let Features = new FeatureList()
Features.get(5).feature = 'uncheck'

// Add a function that generates pagination to prototype
Siema.prototype.addPagination = function() {
  for (let i = 0; i < this.innerElements.length; i++) {
    const btn = document.createElement('button')
    const title = this.innerElements[i].dataset.title == null ? '' : this.innerElements[i].dataset.title
    btn.textContent = `${title} *${i}`
    btn.addEventListener('click', () => this.goTo(i))
    this.selector.appendChild(btn)
  }
}

export default {
  name: 'Siema',
  components: {
    DfpSlot
  },
  data () {
    return {
      items : Features.items
    }
  },
  mounted() {
    new Siema({
      selector: this.$refs.slider1,
    })
    .addPagination()
  }  
}
</script>

<style>
@import url(../main.css);
#slider1 {
  width: 800px;
  margin: auto;
}
.img {
  width: 800px;
  height: 600px;
}
</style>