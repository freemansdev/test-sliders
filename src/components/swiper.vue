<template>
<div class="container">
  <h1><a href="https://swiperjs.com/">Swiper</a></h1>
  <div class="flex-container">
  <ul class="features">
    <li v-for="item in items" class="icon" :class="item.feature">{{item.text}}</li>
  </ul>
  </div>
  <!-- Slider main container -->
  <div class="swiper-container gallery-top">
      <!-- Additional required wrapper -->
      <div class="swiper-wrapper">
          <!-- Slides -->
          <!-- Lazy image -->
          <div class="swiper-slide">
            <img data-src="https://picsum.photos/id/1/800/600" class="swiper-lazy">
            <div class="swiper-lazy-preloader"></div>
          </div>
          <div class="swiper-slide">
            <img data-src="https://picsum.photos/id/2/800/600" class="swiper-lazy">
            <div class="swiper-lazy-preloader"></div>
          </div>
          <div class="swiper-slide">
            <img data-src="https://picsum.photos/id/3/800/600" class="swiper-lazy">
            <div class="swiper-lazy-preloader"></div>
          </div>
          <div class="swiper-slide">
            <img data-src="https://picsum.photos/id/4/800/600" class="swiper-lazy">
            <div class="swiper-lazy-preloader"></div>
          </div>
          <div class="swiper-slide">
            <iframe class="youtube-player" type="text/html" width="800" height="600"
              src="http://www.youtube.com/embed/bZSM5ZbdpWw" frameborder="0">
            </iframe>
          </div>
          <div class="swiper-slide">
            <img data-src="https://picsum.photos/id/6/800/600" class="swiper-lazy">
            <div class="swiper-lazy-preloader"></div>
          </div>
          <div class="swiper-slide">
            <img data-src="https://picsum.photos/id/7/800/600" class="swiper-lazy">
            <div class="swiper-lazy-preloader"></div>
          </div>
          <div class="swiper-slide">
            <img data-src="https://picsum.photos/id/8/800/600" class="swiper-lazy">
            <div class="swiper-lazy-preloader"></div>
          </div>
          <div class="swiper-slide">
            <img data-src="https://picsum.photos/id/9/800/600" class="swiper-lazy">
            <div class="swiper-lazy-preloader"></div>
          </div>
      </div>
      <!-- Add Pagination -->
      <div class="swiper-pagination"></div>
      <!-- If we need navigation buttons -->
      <div class="swiper-button-next swiper-button-white"></div>
      <div class="swiper-button-prev swiper-button-white"></div>
  </div>
  
  <!-- Thumbs -->
  <div class="swiper-container gallery-thumbs">
    <div class="swiper-wrapper">
          <div class="swiper-slide">
            <img data-src="https://picsum.photos/id/1/96/80" class="swiper-lazy ">
            <div class="swiper-lazy-preloader"></div>
          </div>
          <div class="swiper-slide">
            <img data-src="https://picsum.photos/id/2/96/80" class="swiper-lazy ">
            <div class="swiper-lazy-preloader"></div>
          </div>
          <div class="swiper-slide">
            <img data-src="https://picsum.photos/id/3/96/80" class="swiper-lazy ">
            <div class="swiper-lazy-preloader"></div>
          </div>
          <div class="swiper-slide">
            <img data-src="https://picsum.photos/id/4/96/80" class="swiper-lazy ">
            <div class="swiper-lazy-preloader"></div>
          </div>
          <div class="swiper-slide">
            <img data-src="https://picsum.photos/id/5/96/80" class="swiper-lazy ">
            <div class="swiper-lazy-preloader"></div>
          </div>
          <div class="swiper-slide">
            <img data-src="https://picsum.photos/id/6/96/80" class="swiper-lazy ">
            <div class="swiper-lazy-preloader"></div>
          </div>
          <div class="swiper-slide">
            <img data-src="https://picsum.photos/id/7/96/80" class="swiper-lazy ">
            <div class="swiper-lazy-preloader"></div>
          </div>
          <div class="swiper-slide">
            <img data-src="https://picsum.photos/id/8/96/80" class="swiper-lazy ">
            <div class="swiper-lazy-preloader"></div>
          </div>
          <div class="swiper-slide">
            <img data-src="https://picsum.photos/id/9/96/80" class="swiper-lazy ">
            <div class="swiper-lazy-preloader"></div>
          </div>
    </div>
      <!-- If we need navigation buttons -->
      <div class="swiper-button-next swiper-button-white"></div>
      <div class="swiper-button-prev swiper-button-white"></div>
  </div>

</div>
</template>

<script>
import Swiper from 'swiper'
import 'swiper/css/swiper.min.css'
import {FeatureList} from '../Features'

let Features = new FeatureList()
Features.get(3).feature = 'uncheck'

export default {
  data () {
    return {
      items : Features.items
    }
  },
  mounted() {
    //initialize swiper when document ready
    var mySwiper = new Swiper ('.gallery-top', {
      spaceBetween: 5,
      loop: true,
      //loopedSlides: 5, //looped slides should be the same
      preloadImages: false,
      lazy: true,
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      pagination: {
        el: '.swiper-pagination',
        type: 'fraction',
      },
      thumbs: {
        swiper: {
          el: '.gallery-thumbs',
          preloadImages: false,
          lazy: true,
          spaceBetween: 5,
          slidesPerView: 7,
          //loop: true,
          freeMode: true,
          //loopedSlides: 5, //looped slides should be the same
          watchSlidesVisibility: true,
          watchSlidesProgress: true,
          navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
          },
        }
      },      
    })
  }  
}
</script>

<style>
@import url(../main.css);

    .swiper-container {
      width: 100%;
      margin-left: auto;
      margin-right: auto;
    }
    .swiper-slide {
      background-size: cover;
      background-position: center;
    }
    .gallery-top {
      width: 920px;
    }
    .gallery-thumbs {
      height: 80px;
      width: 768px;
      box-sizing: border-box;
      padding: 10px 0;
    }
    .gallery-thumbs .swiper-slide {
      opacity: 0.4;
    }
    .gallery-thumbs .swiper-slide-thumb-active {
      opacity: 1;
    }
</style>
