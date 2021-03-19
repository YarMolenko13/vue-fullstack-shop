<template>
  <div class="v-home">
    <div class="hero_area">
      <v-social />
      <v-header />
      <v-slider />
    </div>
    <v-latest-watches />
    <v-contact-us />
    <v-footer />
  </div>
</template>

<script>
import vHeader from './../layouts/v-header'
import vSocial from './v-social'
import vSlider from './slider/v-slider'
import vLatestWatches from './latest-watches/v-latest-watches'
import vContactUs from './v-contact-us'
import vFooter from './../layouts/v-footer'

export default {
  name: "v-home",
  components: {
    vSocial,
    vHeader,
    vSlider,
    vLatestWatches,
    vContactUs,
    vFooter
  }
}
</script>

<style>

</style>