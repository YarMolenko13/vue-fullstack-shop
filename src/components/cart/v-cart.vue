<template>
  <div class="v-cart">
    <VHeader />
      <div class="v-cart__body">
        <img class="v-cart__bg" :src="require('../../assets/images/clocks.jpg')">
        <div class="v-cart__content">
          <div class="v-cart__items"></div>
          <h3 style="text-align: center; padding-top: 220px;" v-if="cartLength===0">Cart is empty ;(</h3>
          <VCartItem
              v-for="cart_item in cart_items"
              :key="cart_item.id"
              :cart_items_data="cart_item"
              @deleteFromCart="deleteFromCart"
          />
        </div>
      </div>
    <VFooter />
  </div>
</template>

<script>
import VHeader from "../layouts/v-header";
import VFooter from "../layouts/v-footer";
import VCartItem from "./v-cart-item";

import { mapGetters, mapActions } from 'vuex'

export default {
  name: "v-cart",
  components: {VCartItem, VFooter, VHeader},
  computed: {
    ...mapGetters([
        'GET_CART_ITEMS_FROM_STATE'
    ]),
    cart_items() {
      return this.GET_CART_ITEMS_FROM_STATE
    },
    cartLength() {
      return this.GET_CART_ITEMS_FROM_STATE.length
    }
  },
  methods: {
    ...mapActions([
        'DELETE_ITEM_FROM_CART',
    ]),
    deleteFromCart(itemID) {
      this.DELETE_ITEM_FROM_CART(itemID)
    }
  }
}
</script>

<style lang="scss">
  .v-cart {
    &__body {
      height: calc(100vh - 91px);
      display: flex;
      justify-content: center;
    }
    &__bg {
      z-index: -1;
      top: 0;
      left: 0;
      position: fixed;
      opacity: .3;
      width: 100%;
      height: 100%;
    }
    &__content {
      width: 60%;
      //min-height: 300px;
      background: #fff;
      border-radius: 30px;
      margin-top: 40px;
      margin-bottom: 40px;
      padding: 60px;
    }
    &__items {
      display: flex;
      flex-direction: column;
    }
  }
</style>