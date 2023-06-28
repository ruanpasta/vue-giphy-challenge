<template>
  <q-dialog ref="dialogRef" @hide="onDialogOK">
    <q-card class="q-dialog-plugin" :class="$style['dialog-giphs']">
      <div :class="$style['dialog-giphs__header']">
        <h6 class="text-h6">{{ props.item?.title }}</h6>
        <q-icon
          name="clear"
          class="cursor-pointer"
          @click="onDialogOK"
        ></q-icon>
      </div>

      <q-img
        :class="$style['dialog-giphs__image']"
        :key="props.item?.id"
        :src="props.item?.images.downsized_large.url"
        :alt="props.item?.title"
      />
      <q-card-actions align="center">
        <q-btn color="primary" label="Copy giph link" @click="onLinkCopy" />
      </q-card-actions>
    </q-card>
  </q-dialog>
</template>

<script setup lang="ts">
import { useDialogPluginComponent, useQuasar } from 'quasar';
import { IGif } from '@giphy/js-types';

const $q = useQuasar();

const props = defineProps({
  item: Object,
});

defineEmits([
  // REQUIRED; need to specify some events that your
  ...useDialogPluginComponent.emits,
]);

const { dialogRef, onDialogOK } = useDialogPluginComponent();

const onLinkCopy = () => {
  const link = (props.item as IGif).images.original.url;

  navigator.clipboard
    .writeText(link)
    .then(() =>
      $q.notify({
        type: 'info',
        message: 'Link copiado para a área de transferência',
        position: 'top-left',
      })
    )
    .catch((error) =>
      $q.notify({
        type: 'info',
        message: `Erro ao copiar o link: ${error}`,
        position: 'top-left',
      })
    );
};
</script>

<style module lang="scss">
.dialog-giphs {
  @apply p-8;

  &__header {
    @apply pb-4 flex justify-between;

    i {
      @apply text-2xl;
    }
  }

  &__image {
    @apply mb-4;
  }
}
</style>
