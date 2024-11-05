<script setup lang="ts">
import { useRoute } from 'vue-router';
import { useUniverseChar } from '~/composables/useUniverseChar';
import type { Universe } from '~/types';

interface RouteParams {
  char: string;
  universe: string;
}

const route = useRoute();
const { char, universe } = route.params as RouteParams;

useHead({
  title: `Page details | ${char}`,
  meta: [
    {
      name: 'description',
      content: `Find more information about ${char}`
    }
  ]
});

const { charDetails } = await useUniverseChar(universe as Universe, char);
</script>

<template>
  <div class="py-8">
    <UContainer>
      <PageHeader title="Detail page:" />
    </UContainer>
    <UContainer>
      <div class="grid gap-4 xl:grid-cols-2">
        <Card imageSize="square" v-if="charDetails" :title="charDetails.name" :img="charDetails.image" />
        <CharDetailList :attributes="charDetails?.attributes" />
      </div>
    </UContainer>
  </div>
</template>
