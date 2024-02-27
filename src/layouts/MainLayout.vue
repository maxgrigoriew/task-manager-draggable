<script setup lang="ts">
import TheHeader from '@/components/TheHeader.vue';
</script>
<template>
  <div>
    <div class="wrapper-header">
      <div class="container">
        <TheHeader />
      </div>
    </div>
    <div class="container">
      <main class="main">
        <slot />
      </main>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import './../assets/scss/vars';
.main {
  padding-top: 40px;
}
.wrapper-header {
  position: sticky;
  top: 0;
  z-index: 40;
  background-color: $light;
}
</style>
