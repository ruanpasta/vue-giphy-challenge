<template>
  <q-page>
    <GiphsList />
  </q-page>
</template>

<script setup lang="ts">
import { useQuasar } from 'quasar';
import GiphsList from 'src/components/GiphList.vue';
import { onMounted } from 'vue';

onMounted(() => {
  const theme = useQuasar();
  theme.dark.set(true);
});
</script>
