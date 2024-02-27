<template>
  <header class="header">
    <nav class="header__nav">
      <ul class="header__list">
        <li class="header__list-item">
          <app-button
            outline
            @click="$router.push('/')"
            >Главная</app-button
          >
        </li>

        <li class="header__list-item">
          <app-button
            outline
            @click="$router.push('/about')"
            >Описание</app-button
          >
        </li>
      </ul>
    </nav>
  </header>
</template>

<script setup lang="ts">
import AppButton from '@/components/AppButton.vue';
</script>
<style lang="scss" scoped>
.header {
  &__list {
    display: flex;
    gap: 0 20px;
    align-items: center;
    padding: 14px 0;
  }
}
</style>
