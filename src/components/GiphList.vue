<template>
  <q-virtual-scroll :class="$style['grid']" :items="giphs" v-slot="{ item }">
    <q-item :key="item.id" dense>
      <a @click="() => openDialog(item)">
        <q-img
          :class="$style['grid__item']"
          :key="item.id"
          :src="item.images.downsized.url"
          :alt="item.title"
          width="150px"
          height="150px"
        />
      </a>
    </q-item>
  </q-virtual-scroll>
</template>

<script setup lang="ts">
import { computed, onMounted } from 'vue';

import { useGiphsStore } from 'src/stores/giphs';
import { IGif } from '@giphy/js-types';
import { useQuasar } from 'quasar';

const $q = useQuasar();

import GiphDialog from './GiphDialog.vue';

const giphsStore = useGiphsStore();

const giphs = computed(() => giphsStore.giphs);

const openDialog = (item: IGif) => {
  console.log('open', item.title);
  $q.dialog({
    component: GiphDialog,
    componentProps: { item },
  });
};

onMounted(() => giphsStore.load(50, 50));
</script>

<style module lang="scss">
.grid {
  > div {
    @apply flex flex-wrap gap-4 pl-2 pt-2;

    > div {
      @apply p-0;
    }
  }
}

.grid__item:hover {
  @apply border-2 rounded-md border-green-500;
  @apply cursor-pointer scale-110 transition-transform ease-out duration-300;
}
</style>
