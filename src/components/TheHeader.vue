<template>
  <header class="header">
    <div class="container">
      <nav class="header__nav">
        <ul class="header__list">
          <li class="header__list-item">
            <app-button @click="$router.push('/')">Главная</app-button>
          </li>

          <li class="header__list-item">
            <app-button @click="$router.push('/kanban')"
              >Канбан доска</app-button
            >
          </li>
        </ul>
      </nav>
    </div>
  </header>
</template>

<script setup lang="ts">
import AppButton from './../components/AppButton.vue';
</script>
<style lang="scss" scoped>
.header {
  border-bottom: 1px solid var(--light);
  &__list {
    display: flex;
    gap: 0 20px;
    align-items: center;
    padding: 14px 0;
  }
}
</style>
