<template>
  <ps-section class="ps-career-qu">
    <ps-paragraph>
      現在、九州大学 経済学部の3年生（23卒）。
      ゼミにおいては、機械学習モデルやアルゴリズムを用いたデータ解析について学ぶ予定。
    </ps-paragraph>
  </ps-section>
</template>

<script lang="ts">
import Vue from 'vue'
import PsParagraph from '~/components/common-components/ps-paragraph.vue'
import PsSection from '~/components/common-components/ps-section.vue'
export default Vue.extend({
  components: { PsSection, PsParagraph },
})
</script>

<style lang="scss" scoped>
$block: '.ps-career-qu';
#{$block} {
  padding-bottom: 64px;
}
</style>
