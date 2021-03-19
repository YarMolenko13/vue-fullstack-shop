<template>
  <div class="v-latest-watches">
    <section class="shop_section layout_padding">
      <div class="container">
        <div class="heading_container heading_center">
          <h2>
            Latest Watches
          </h2>
        </div>
        <div class="row">
          <v-watch-item
              v-for="product in products"
              :key="product.id"
              :product_data="product"
              :is-featured="product.tag==='featured'"
              :is-tag-exist="product.tag.length>0"
          />
        </div>
        <div class="btn-box" v-if="this.$route.meta.title==='Timpus'">
          <router-link to="/watches">View all</router-link>
        </div>
        <div class="btn-box" v-else @click="viewMore">
          <a class="view-more__btn" v-if="isViewMore">Close more</a>
          <a class="view-more__btn" v-else>View more</a>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import vWatchItem from './../../layouts/v-watch-item'
import { mapGetters, mapActions } from 'vuex'

export default {
  name: "v-latest-watches",
  data: () => {
    return {
      isViewMore: false
    }
  },
  components: {
    vWatchItem
  },
  computed: {
    ...mapGetters([
        'GET_PRODUCTS_FROM_STATE'
    ]),
    products() {
      // if (this.$route.meta.title==='Timpus') {
        let stateProducts = this.GET_PRODUCTS_FROM_STATE
        let featuredProducts = stateProducts.filter((p) => {
          return p.tag === 'featured'
        })
        let howFeatured = featuredProducts.length
        let newProducts = stateProducts.filter((p) => {
          return p.tag === 'new'
        })
        let commonProducts = stateProducts.filter((p) => {
          return p.tag === ''
        })
        let finProdArray = [...featuredProducts, ...newProducts, ...commonProducts]
        if (howFeatured === 0) {
          if (finProdArray.length >= 8) {
            finProdArray.splice(7)
          }
        } else if (howFeatured === 1) {
          if (finProdArray.length >= 8) {
            finProdArray.splice(6)
          }
        } else if (howFeatured > 1) {
          if (finProdArray.length >= 8) {
            finProdArray.splice(5)
          }
        }
        if (this.isViewMore) {
          let stateProducts = this.GET_PRODUCTS_FROM_STATE
          let featuredProducts = stateProducts.filter((p) => {
            return p.tag === 'featured'
          })
          let howFeatured = featuredProducts.length
          let newProducts = stateProducts.filter((p) => {
            return p.tag === 'new'
          })
          let commonProducts = stateProducts.filter((p) => {
            return p.tag === ''
          })
          let finProdArray = [...featuredProducts, ...newProducts, ...commonProducts]
          return finProdArray
       }
        return finProdArray
    }
  },
  methods: {
    ...mapActions([
        'GET_ITEMS_FROM_DB'
    ]),
    viewMore() {
      this.isViewMore = !this.isViewMore
    }
  },
  created() {
    this.GET_ITEMS_FROM_DB().then(() => console.log(this.GET_PRODUCTS_FROM_STATE))
  }
}
</script>

<style lang="scss">
  .view-more__btn {
    cursor: pointer;
    color: #fff !important;
    font-weight: 400;
  }
</style>