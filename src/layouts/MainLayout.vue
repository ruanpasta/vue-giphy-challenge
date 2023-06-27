<template>
  <section :class="$style['main']">
    <q-layout>
      <q-header>
        <q-toolbar>
          <q-toolbar-title> Quasar App </q-toolbar-title>
        </q-toolbar>
      </q-header>

      <q-page-container>
        <router-view />
      </q-page-container>
    </q-layout>
  </section>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'MainLayout',

  components: {},

  setup() {
    return {};
  },
});
</script>

<style scoped module>
.main {
  @apply flex justify-center;
}
</style>
