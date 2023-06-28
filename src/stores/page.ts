import { defineStore } from 'pinia';
import { ref } from 'vue';

export const usePageStore = defineStore('page', () => {
  const offset = ref(25);
  const defaultLimit = ref(25);

  const incrementPage = (value?: number) => {
    offset.value += value || defaultLimit.value;
  };
  const decrementPage = (value?: number) => {
    offset.value -= value || defaultLimit.value;
  };

  return { offset, defaultLimit, incrementPage, decrementPage };
});
