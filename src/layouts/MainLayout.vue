<script setup lang="ts">
import TheHeader from '@/components/TheHeader.vue';
</script>
<template>
  <div>
    <div class="container">
      <TheHeader />
    </div>
  </div>
  <div class="container">
    <main class="main">
      <slot />
    </main>
  </div>
</template>

<style lang="scss" scoped>
@import './../assets/scss/vars';
.main {
  padding-top: 20px;
}
</style>
