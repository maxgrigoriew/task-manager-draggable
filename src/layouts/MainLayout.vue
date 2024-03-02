<script setup lang="ts">
import TheHeader from './../components/TheHeader.vue';
</script>
<template>
  <div class="layout">
    <TheHeader />

    <main class="main">
      <div class="container">
        <slot />
      </div>
    </main>
  </div>
</template>

<style lang="scss" scoped>
@import './../assets/scss/vars';
.layout {
  min-height: 100vh;
  background-image: url('./../assets/images/bg.jpg');
  background-size: cover;
  background-position: top;
  background-repeat: no-repeat;
}
.main {
  padding-top: 20px;
}
</style>
