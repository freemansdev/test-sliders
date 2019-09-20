import Vue from 'vue'
import App from './App.vue'
import {router} from './router'
import '@glidejs/glide/dist/css/glide.core.min.css'
import '@glidejs/glide/dist/css/glide.theme.min.css'


new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
