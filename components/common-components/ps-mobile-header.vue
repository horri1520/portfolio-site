<template>
  <header class="ps-mobile-header">
    <div class="ps-mobile-header__outer">
      <ps-link to="/">
        <p class="ps-mobile-header__inner">
          Portfolio of
          <br />
          Kaito Horiuchi
        </p>
      </ps-link>
    </div>
  </header>
</template>

<script lang="ts">
import Vue from 'vue'
import psLink from './ps-link.vue'
export default Vue.extend({
  components: { psLink },
})
</script>

<style lang="scss" scoped>
$block: '.ps-mobile-header';
#{$block} {
  display: inline-block;
  width: 100vw;
  padding: 16px 32px;
  background: $color-white;
  border-bottom: 1px solid $color-border-gray;
  &__outer {
    display: inline-block;
  }
  &__inner {
    display: inline-block;
    text-transform: uppercase;
    font-family: $en-font;
    font-weight: 400;
    color: $color-default-black;
    @include font-size(2);
  }
}
</style>
