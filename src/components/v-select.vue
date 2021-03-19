<template>
  <div class="select">
    <p
      class="select__title unSelectable"
      @click="areOptionVisible = !areOptionVisible"
    >{{ selected }}</p>
    <div
      class="select__options"
      v-if="areOptionVisible || isExpanded"
    >
      <p
        class="unSelectable"
        v-for="option in options"
        :key="option.value"
        @click="selectOption(option)"
      >
        {{ option.name }}
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: "v-select",
  data() {
    return {
      areOptionVisible: false
    }
  },
  props: {
    options: {
      type: Array,
      default() {
        return []
      }
    },
    selected: {
      type: String,
      default() {
        return ''
      }
    },
    isExpanded: {
      type: Boolean,
      default() {
        return false
      }
    },
  },
  methods: {
    selectOption(option) {
      this.$emit('selectOption', option)
      this.areOptionVisible = false
    },
    hideSelect() {
      this.areOptionVisible = false
    }
  },
  mounted() {
    document.addEventListener('click', this.hideSelect.bind(this), true)
  },
  beforeDestroy() {
    document.removeEventListener('click', this.hideSelect)
  }
}
</script>

<style lang="scss">
  .select {
    position: relative;
    width: 170px;
    margin-top: 60px;
    margin-bottom: 40px;
    &__title {
      display: inline-flex;
      flex: 0 0 90%;
      width: 100%;
      justify-content: flex-start;
      align-items: center;
      padding-left: 20px;
      border: solid 1px #aeaeae;
      height: 30px;
      cursor: pointer;
      margin: 0;
      background: #fff;
      box-sizing: border-box;
    }
    &__options {
      border: solid 1px #aeaeae;
      box-shadow: 0 0 8px #eaeaea;
      position: absolute;
      top: 29px;
      width: 100%;
      box-sizing: border-box;
      p {
        box-sizing: border-box;
        display: inline-flex;
        flex: 0 0 100%;
        width: 100%;
        justify-content: flex-start;
        align-items: center;
        padding-left: 20px;
        height: 30px;
        margin: 0;
        background: #fff;
        //padding: 5px 0;
        &:hover {
          background: #e7e7e7;
          cursor: pointer;
        }
      }
    }
  }
</style>