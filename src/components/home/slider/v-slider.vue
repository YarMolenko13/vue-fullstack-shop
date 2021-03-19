<template>
  <swiper
      ref="mySwiper"
      class="slider"
      :scrollbar="{ draggable: false }"
      :options="swiperOptions"
  >
    <swiper-slide class="slide">
      <div class="slide__body">
        <div class="slide__content content-slide">
          <div class="content-slide__title">Smart Watches</div>
          <div class="content-slide__text">
            Aenean scelerisque felis ut orci condimentum laoreet. Integer nisi nisl, convallis et augue sit amet, lobortis<br /> semper quam.
          </div>
          <router-link to="/contact" class="content-slide__btn">Contact Us</router-link>
        </div>
        <div class="slide__img">
          <img :src="require('../../../assets/images/slider-img.png')" alt="">
        </div>
      </div>
    </swiper-slide>
    <swiper-slide class="slide">
      <div class="slide__body">
        <div class="slide__content content-slide">
          <div class="content-slide__title">Smart Watches</div>
          <div class="content-slide__text">
            Aenean scelerisque felis ut orci condimentum laoreet. Integer nisi nisl, convallis et augue sit amet, lobortis semper quam.
          </div>
          <router-link to="/contact" class="content-slide__btn">Contact Us</router-link>
        </div>
        <div class="slide__img">
          <img :src="require('../../../assets/images/slider-img.png')" alt="">
        </div>
      </div>
    </swiper-slide>
<!--    <div class="swiper-pagination" slot="pagination"></div>-->
  </swiper>
</template>

<script>
import { Swiper, SwiperSlide, directive  } from 'vue-awesome-swiper'

import 'swiper/swiper-bundle.css'


export default {
  name: 'v-slider',
  components: {
    Swiper,
    SwiperSlide
  },
  directives: {
    swiper: directive
  },
  data() {
    return {
      swiperOptions: {
        pagination: {
          el: '.swiper-pagination'
        },
        // Some Swiper option/callback...
      }
    }
  },
  computed: {
    swiper() {
      return this.$refs.mySwiper.$swiper
    }
  },
  mounted() {
    console.log('Current Swiper instance object', this.swiper)
    this.swiper.slideTo(3, 1000, false)
  }
}
</script>

<style lang="scss">
  .swiper-container {
    margin: 0;
    width: 100%;
    display: flex;
    align-items: center;
  }
  .swiper-wrapper {
    display: flex;
    align-items: center;
  }
  .slider {
    background: #3b4a6b;
    border-radius: 0 0 0 250px;
    height: calc(100vh - 91px);
    display: flex;
    align-items: center;
  }
  .slide {
    width: 100%;
    display: flex;
    align-items: center;
    margin-top: -100px;
    &__body {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 0 30px;
    }
    &__content {
      flex: 0 1 50%;
    }
    &__img {
      flex: 0 1 45%;
      img {
        width: 100%;
      }
    }
  }
  .content-slide {
    &__title {
      font-size: 32px;
      font-weight: 700;
      color: #fff;
      margin-bottom: 10px;
    }
    &__text {
      color: #fff;
    }
    &__btn {
      margin-top: 20px;
      cursor: pointer;
      display: inline-block;
      padding: 12px 45px;
      background-color: #e6c511;
      color: #ffffff !important;
      border-radius: 5px;
      border: 1px solid #e6c511;
      transition: all 0.3s ease;
      &:hover {
        transform: translateY(-5px);
      }
    }
  }
</style>