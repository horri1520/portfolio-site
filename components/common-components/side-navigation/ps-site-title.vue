<template>
  <div
    :class="browsed ? 'ps-site-title ps-site-title__browsed' : 'ps-site-title'"
  >
    <ps-link :to="to">
      <div class="ps-site-title__inner">
        Portfolio
        <br />
        of
        <br />
        Kaito Horiuchi
      </div>
    </ps-link>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import PsLink from '../ps-link.vue'
import indexPage from '~/constants/pages/index-page'

export default Vue.extend({
  components: { PsLink },

  props: {
    browsed: {
      type: Boolean,
      default: false,
    },
  },

  data() {
    return {
      to: indexPage.path,
    }
  },
})
</script>

<style lang="scss" scoped>
$block: '.ps-site-title';
#{$block} {
  padding-left: 12px;
  border-left: 2px solid $color-white;
  &__browsed {
    border-left: 2px solid $color-default-blue;
  }
  &__inner {
    font-family: $en-font;
    font-weight: 400;
    text-transform: uppercase;
    transition: 0.4s all;
    @include font-size(2.4);

    &:hover {
      color: $color-dark-blue;
    }
  }
}
</style>
