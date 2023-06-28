<template>
  <q-form @submit.prevent="onSubmit">
    <q-input standout="bg-teal text-white" v-model="query" label="Search">
      <template v-slot:append>
        <q-icon
          v-if="query"
          name="clear"
          class="cursor-pointer"
          @click="onClear"
        ></q-icon>
        <q-icon name="search" class="cursor-pointer" @click="onSubmit"></q-icon>
      </template>
    </q-input>
  </q-form>
</template>

<script setup lang="ts">
import { useGiphsStore } from 'src/stores/giphs';
import { ref } from 'vue';

const giphsStore = useGiphsStore();

const query = ref('');

const onSubmit = () => {
  if (query.value) {
    giphsStore.search(query.value, 50, 50);
  } else {
    giphsStore.load(50, 50);
  }
};

const onClear = () => (query.value = '');
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
