<template>
  <div class="v-cart-item">
    <div class="v-cart-item__img">
      <img :src="require('../../assets/images/'+cart_items_data.imgPath)" alt="">
    </div>
    <div class="v-cart-item__info">
      <div class="v-cart-item__title">{{ cart_items_data.title }}</div>
      <div class="v-cart-item__price">{{ cart_items_data.price }}$</div>
    </div>
    <button @click="deleteFromCart" class="v-cart-item__btn">X</button>
  </div>
</template>

<script>
export default {
  name: "v-cart-item",
  props: {
    cart_items_data: {
      type: Object,
      default() {
        return {}
      }
    }
  },
  methods: {
    deleteFromCart() {
      this.$emit('deleteFromCart', this.cart_items_data.id)
    }
  }
}
</script>

<style lang="scss">
  .v-cart-item {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-bottom: 40px;
    &:last-child {
      padding-bottom: 0;
    }
    &__img {
      img {
        width: 70px;
      }
    }
    &__info {
      text-align: center;
    }
    &__title {
      font-weight: 600;
      font-size: 24px;
    }
    &__price {
      font-weight: 500;
      font-size: 20px;
    }
    &__btn {
      background: #c82333;
      color: #fff;
      border: 0;
      border-radius: 50%;
      width: 32px;
      height: 32px;
      padding: 0;
      text-align: center;
      transition: all .3s ease 0s;
      &:hover {
        transform: translateY(-2px);
      }
      &:focus {
        outline: none;
      }
    }
  }
</style>