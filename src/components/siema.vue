<template>
<div class="container">
    <h1>Siema</h1>
    <div id="slider1" ref="slider1">
        <div><img src="https://pawelgrzybek.com/siema/assets/siema--pink.svg" alt="Siema image" /></div>
        <div><img src="https://pawelgrzybek.com/siema/assets/siema--yellow.svg" alt="Siema image" /></div>
        <div><img src="https://pawelgrzybek.com/siema/assets/siema--pink.svg" alt="Siema image" /></div>
        <div><img src="https://pawelgrzybek.com/siema/assets/siema--yellow.svg" alt="Siema image" /></div>
    </div>
</div>
</template>

<script>
import Siema from 'siema'

export default {
  data () {
    return {}
  },
  mounted() {
    new Siema({
       selector: this.$refs.slider1,
    })
  }  
}
</script>
