import { defineStore } from 'pinia';
import { IGif } from '@giphy/js-types';
import { fetchSearchGifs, fetchTrendingGifs } from 'src/giphy.api';
import { usePageStore } from 'src/stores/page';
import { ref } from 'vue';
import { Notify } from 'quasar';

export const useGiphsStore = defineStore('giphsStore', () => {
  const pageStore = usePageStore();
  const giphs = ref<IGif[]>([]);
  const searchQuery = ref('');

  const load = async (offset?: number, limit?: number) => {
    try {
      const { data } = await fetchTrendingGifs({
        offset: offset || pageStore.offset,
        limit: limit || pageStore.defaultLimit,
      });
      giphs.value = [];
      giphs.value.push(...data);
      searchQuery.value = '';
      pageStore.incrementPage(offset || pageStore.offset);
    } catch (e) {
      return Notify.create({
        type: 'negative',
        message: 'Failed to load giphs',
        position: 'top-left',
      });
    }
  };

  const increase = async () => {
    try {
      pageStore.incrementPage();

      let data: IGif[] = [];
      if (searchQuery.value) {
        const response = await fetchSearchGifs({
          query: searchQuery.value,
          offset: pageStore.offset,
          limit: pageStore.defaultLimit,
        });
        data = response.data;
      } else {
        const response = await fetchTrendingGifs({
          offset: pageStore.offset,
          limit: pageStore.defaultLimit,
        });
        data = response.data;
      }
      giphs.value.push(...data);
    } catch (e) {
      pageStore.decrementPage();
      return Notify.create({
        type: 'negative',
        message: 'Failed to load more giphs',
        position: 'top-left',
      });
    }
  };

  const search = async (query: string, offset?: number, limit?: number) => {
    try {
      const { data } = await fetchSearchGifs({
        query,
        offset: offset || pageStore.offset,
        limit: limit || pageStore.defaultLimit,
      });
      giphs.value = [];
      giphs.value.push(...data);
      searchQuery.value = query;
      pageStore.incrementPage(offset || pageStore.offset);
    } catch (e) {
      console.log('falied');
      return Notify.create({
        type: 'negative',
        message: 'Failed to load giphs',
        position: 'top-left',
      });
    }
  };

  return { giphs, load, increase, search };
});
