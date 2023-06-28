<template>
  <q-header :class="$style['header']">
    <q-toolbar :class="$style['header__toolbar']">
      <q-toolbar-title>
        <span>GIPHY</span>
      </q-toolbar-title>

      <HeaderSearchForm />
    </q-toolbar>
  </q-header>
</template>

<script setup lang="ts">
import HeaderSearchForm from './HeaderSearchForm.vue';
</script>

<style module lang="scss">
.header {
  @apply fixed max-w-5xl top-[40px] left-[50%] w-full;
  @apply bg-transparent;
  transform: translate(-50%, -50%);
}

.header__toolbar {
  > :nth-child(1) {
    span {
      @apply border-2 rounded-md border-l-green-500 border-r-green-500 p-2;
    }
  }

  > :nth-child(2) {
    @apply w-3/6;
  }
}
</style>
