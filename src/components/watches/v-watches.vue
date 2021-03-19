<template>
  <div class="v-watches">
    <v-header />
    <v-latest-watches />
    <v-footer />
  </div>
</template>

<script>
import vHeader from './../layouts/v-header'
import vLatestWatches from './../home/latest-watches/v-latest-watches'
import vFooter from './../layouts/v-footer'
import VLatestWatches from "../home/latest-watches/v-latest-watches";
import VFooter from "../layouts/v-footer";

export default {
  name: "v-watches",
  components: {vHeader, VFooter, VLatestWatches},
}
</script>

<style lang="scss">
  .v-watches {
    .header_section {
      box-shadow: 0 0 3px 0 rgb(0 0 0 / 25%);
    }
    .shop_section {
      padding-top: 50px;
    }
  }
</style>