<template>
  <div class="footer-reviews__other-reviews review">
    <div class="review__header">
      <div class="review__author">{{ review_data.userName }}</div>
      <div class="review__date">{{ review_data.created.split("T")[0] }}</div>
    </div>
    <div class="review__rating footer-reviews__form_radios" ref="radios">
      <span data-id-r="1"><i class="far fa-star"></i></span>
      <span data-id-r="2"><i class="far fa-star"></i></span>
      <span data-id-r="3"><i class="far fa-star"></i></span>
      <span data-id-r="4"><i class="far fa-star"></i></span>
      <span data-id-r="5"><i class="far fa-star"></i></span>
    </div>
    <div class="review__text">{{ review_data.reviewText }}</div>
    <input type="hidden" :value="review_data.id" data-idR>
  </div>
</template>

<script>
export default {
  name: "v-review",
  data: () => {
    return {
    }
  },
  props: {
    review_data: {
      type: Object,
      default: () => {
        return {}
      }
    }
  },
  mounted() {
    let radioArr = this.$refs.radios.children
    for (let i = 0; i < this.review_data.rating; i++) {
      radioArr[i].classList.add('_active')
    }
  }
}
</script>

<style scoped>

</style>