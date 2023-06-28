<template>
  <section :class="$style['main']">
    <q-layout :class="$style['main__layout']">
      <HeaderToolbar />

      <q-page-container
        :class="$style['main__layout__container']"
        @scroll="onScrollEnd"
      >
        <router-view />
      </q-page-container>
    </q-layout>
  </section>
</template>

<script setup lang="ts">
import { useGiphsStore } from 'src/stores/giphs';
import HeaderToolbar from 'src/components/HeaderToolbar.vue';

const giphsStore = useGiphsStore();

const onScrollEnd = (event: UIEvent) => {
  const { scrollTop, scrollHeight, offsetHeight } = event.target as HTMLElement;

  const viewHeight = scrollHeight;
  const currentScroll = scrollTop + offsetHeight;

  if (viewHeight === currentScroll) giphsStore.increase();
};
</script>

<style module lang="scss">
.main {
  @apply flex justify-center;
}

.main__layout {
  @apply max-w-5xl max-h-screen;

  &__container {
    @apply fixed top-[calc(56px/2)] left-1/2 max-w-[1024px] -translate-x-1/2;
    @apply overflow-auto h-[calc(100vh-86px)] w-full mt-[50px];
    padding: 0 !important;

    main {
      min-height: 0 !important;
    }
  }
}
</style>
