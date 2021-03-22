<template>
<!--  <div class="col-sm-6 col-xl-3">-->
  <div :class="{ 'col-md-6' : isFeatured, 'col-sm-6 col-xl-3': !isFeatured }">

    <v-popup
        v-if="isInfoPopupVisible"
        @closePopup="closeInfoPopup"
        :popupTitle="isTagExist ? product_data.tag[0].toUpperCase()+product_data.tag.slice(1) : ''"
        :product_data="product_data"
        :item-id="product_data.id"
    >
      <div class="box2 box content-popup">
          <div class="img-box2 img-box content-popup__img">
            <img :src="require('../../assets/images/'+product_data.imgPath)" alt="">
          </div>
          <div class="content-popup__details">
            <div class="content-popup__title">{{ product_data.title }}</div>
            <div class="content-popup__price">${{ product_data.price }}</div>
            <button
                @click="addToCart(product_data.id)"
                class="v-popup__submit"
            >Add to cart</button>
          </div>
      </div>
    </v-popup>

    <div class="box">
      <a @click="showInfoPopup">
        <div class="img-box">
          <img :src="require('../../assets/images/'+product_data.imgPath)" alt="">
        </div>
        <div class="detail-box">
          <h6>{{ product_data.title }}</h6>
          <h6>
            Price:<span>${{ product_data.price }}</span>
          </h6>
        </div>
        <div class="new" v-if="isTagExist">
          <span
              v-if="product_data.tag.length>0"
          >{{ product_data.tag[0].toUpperCase()+product_data.tag.slice(1) }}</span>
          <span v-else></span>
        </div>
      </a>
    </div>
  </div>
</template>

<script>
import vPopup from './v-popup'
// import dbOpenDBRequest from "../../main";

import { mapActions, mapGetters } from 'vuex'

export default {
  name: "v-watch-item",
  data() {
    return {
      isInfoPopupVisible: false
    }
  },
  components: {
    vPopup
  },
  props: {
    product_data: {
      type: Object,
      default() {
        return {}
      }
    },
    isFeatured: {
      type: Boolean,
      default() {
        return false;
      }
    },
    isTagExist: {
      type: Boolean,
      default() {
        return false
      }
    }
  },
  computed: {
  },
  mounted() {
    console.log(this.isFeatured)
  },
  methods: {
    ...mapActions([
        'ADD_TO_CART'
    ]),
    showInfoPopup() {
      this.isInfoPopupVisible = true
      document.body.classList.add('_lock')

    },
    closeInfoPopup() {
      this.isInfoPopupVisible = false
      document.body.classList.remove('_lock')
    },
    addToCart(itemID) {
      this.ADD_TO_CART(itemID)

    }
  }
}
</script>

<style lang="scss">
button {
  &:focus {
    outline: none;
  }
}
.box {
  cursor: pointer;
  transition: all .3s ease 0s;
  &:hover {
    transform: translateY(-10px);
   }
}
</style>