<template>
<div class="container">
    <h1><a href="https://pawelgrzybek.github.io/siema/">Siema</a></h1>
    <div class="flex-container">
    <ul class="features">
      <li v-for="item in items" class="icon" :class="item.feature">{{item.text}}</li>
    </ul>
    </div>
    <div id="slider1" ref="slider1">
        <div><img src="https://pawelgrzybek.com/siema/assets/siema--pink.svg" alt="Siema image" /></div>
        <div>
          <dfp-slot path="/21737763597/adunit-1" :size="[800, 600]" id="d7HVbl4XVvGlWqtER1ed3nfzyMo"/>
        </div>
        <div><img src="https://pawelgrzybek.com/siema/assets/siema--yellow.svg" alt="Siema image" /></div>
        <div>
          <iframe class="youtube-player" type="text/html" width="800" height="600"
            src="http://www.youtube.com/embed/bZSM5ZbdpWw" frameborder="0">
          </iframe>
        </div>
        <div><img src="https://pawelgrzybek.com/siema/assets/siema--pink.svg" alt="Siema image" /></div>
        <div><img src="https://pawelgrzybek.com/siema/assets/siema--yellow.svg" alt="Siema image" /></div>
    </div>
</div>
</template>

<script>
import Siema from 'siema'
import {FeatureList} from '../Features'
import DfpSlot from './DfpSlot.vue';

let Features = new FeatureList()
Features.get(5).feature = 'sleep'

// Add a function that generates pagination to prototype
Siema.prototype.addPagination = function() {
  for (let i = 0; i < this.innerElements.length; i++) {
    const btn = document.createElement('button')
    btn.textContent = i
    btn.addEventListener('click', () => this.goTo(i))
    this.selector.appendChild(btn)
  }
}

export default {
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
</style>