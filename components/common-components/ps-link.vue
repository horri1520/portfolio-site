<template>
  <a is="nuxt-link" class="ps-link" :to="to">
    <slot />
  </a>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  props: {
    to: {
      type: String,
      required: true,
    },
  },
})
</script>

<style lang="scss" scoped>
$block: '.ps-link';
#{$block} {
  text-decoration: none;
  color: $color-default-black;
  display: inline-block;
}
</style>
