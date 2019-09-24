<template>
<div class="container">
  <h1>Swiper</h1>
  <!-- Slider main container -->
  <div class="swiper-container gallery-top">
      <!-- Additional required wrapper -->
      <div class="swiper-wrapper">
          <!-- Slides -->
          <!-- Lazy image -->
          <div class="swiper-slide">
            <img data-src="http://lorempixel.com/800/600/sports/1/png" class="swiper-lazy">
            <div class="swiper-lazy-preloader"></div>
          </div>
          <div class="swiper-slide">
            <img data-src="http://lorempixel.com/800/600/sports/2/png" class="swiper-lazy">
            <div class="swiper-lazy-preloader"></div>
          </div>
          <div class="swiper-slide">
            <img data-src="http://lorempixel.com/800/600/sports/3/png" class="swiper-lazy">
            <div class="swiper-lazy-preloader"></div>
          </div>
          <div class="swiper-slide">
            <img data-src="http://lorempixel.com/800/600/sports/5/png" class="swiper-lazy">
            <div class="swiper-lazy-preloader"></div>
          </div>
          <div class="swiper-slide">
            <iframe class="youtube-player" type="text/html" width="800" height="600"
              src="http://www.youtube.com/embed/bZSM5ZbdpWw" frameborder="0">
            </iframe>
          </div>
      </div>
      <!-- If we need navigation buttons -->
      <div class="swiper-button-next swiper-button-white"></div>
      <div class="swiper-button-prev swiper-button-white"></div>
  </div>
  
  <!-- Thumbs -->
  <div class="swiper-container gallery-thumbs">
    <div class="swiper-wrapper">
          <div class="swiper-slide">
            <img data-src="http://lorempixel.com/170/50/sports/1/png" class="swiper-lazy thumbs">
            <div class="swiper-lazy-preloader"></div>
          </div>
          <div class="swiper-slide">
            <img data-src="http://lorempixel.com/170/50/sports/2/png" class="swiper-lazy thumbs">
            <div class="swiper-lazy-preloader"></div>
          </div>
          <div class="swiper-slide">
            <img data-src="http://lorempixel.com/170/50/sports/3/png" class="swiper-lazy thumbs">
            <div class="swiper-lazy-preloader"></div>
          </div>
          <div class="swiper-slide">
            <img data-src="http://lorempixel.com/170/50/sports/5/png" class="swiper-lazy thumbs">
            <div class="swiper-lazy-preloader"></div>
          </div>
          <div class="swiper-slide">
            <img data-src="http://lorempixel.com/170/50/sports/video-1" class="swiper-lazy thumbs">
            <div class="swiper-lazy-preloader"></div>
          </div>
    </div>
  </div>

</div>
</template>

<script>
import Swiper from 'swiper'
import 'swiper/css/swiper.min.css'

export default {
  data () {
    return {}
  },
  mounted() {
    //initialize swiper when document ready
    var mySwiper = new Swiper ('.gallery-top', {
      spaceBetween: 10,
      loop: true,
      //loopedSlides: 4, //looped slides should be the same
      preloadImages: false,
      lazy: true,
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      thumbs: {
        swiper: {
          el: '.gallery-thumbs',
          preloadImages: false,
          lazy: true,
          spaceBetween: 10,
          slidesPerView: 5,
          loop: true,
          freeMode: true,
          //loopedSlides: 4, //looped slides should be the same
          watchSlidesVisibility: true,
          watchSlidesProgress: true,
        }
      },      
    })
  }  
}
</script>

<style>
    .thumbs {
      width: 350px;
    }
    .swiper-container {
      width: 100%;
      height: 300px;
      margin-left: auto;
      margin-right: auto;
    }
    .swiper-slide {
      background-size: cover;
      background-position: center;
    }
    .gallery-top {
      height: 80%;
      width: 100%;
    }
    .gallery-thumbs {
      height: 20%;
      box-sizing: border-box;
      padding: 10px 0;
    }
    .gallery-thumbs .swiper-slide {
      height: 100%;
      opacity: 0.4;
    }
    .gallery-thumbs .swiper-slide-thumb-active {
      opacity: 1;
    }
</style>