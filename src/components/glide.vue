<template>
<div class="container">
  <h1>Glide</h1>
    <div class="glide">
      <div data-glide-el="track" class="glide__track">
        <ul class="glide__slides">
          <li class="glide__slide"><img src="https://pawelgrzybek.com/siema/assets/siema--pink.svg" alt="Siema image" /></li>
          <li class="glide__slide"><img src="https://pawelgrzybek.com/siema/assets/siema--yellow.svg" alt="Siema image" /></li>
          <li class="glide__slide"><img src="https://pawelgrzybek.com/siema/assets/siema--pink.svg" alt="Siema image" /></li>
          <li class="glide__slide"><img src="https://pawelgrzybek.com/siema/assets/siema--yellow.svg" alt="Siema image" /></li>
        </ul>
      </div>
      <div data-glide-el="controls">
        <button data-glide-dir="<">Prev</button>
        <button data-glide-dir=">">Next</button>
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
    new Glide('.glide').mount()
  }  
}
</script>
