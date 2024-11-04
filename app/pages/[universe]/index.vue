<script setup lang="ts">
import { useRoute } from 'vue-router';
import { useUniverseData } from '~/composables/useUniverseData';
import type { Universe } from '~/types';

interface RouteParams {
  universe: string;
}

const route = useRoute();
const { universe } = route.params as RouteParams ;

useHead({
  title: `${universe} Universe`,
  meta: [
    {
      name: 'description',
      content: `Explore the ${universe} universe`
    }
  ]
});

const { charList, universeTitle } = await useUniverseData(universe as Universe);
</script>

<template>
  <div class="py-8">
    <UContainer>
      <PageHeader :title="`${universeTitle} list of characters`" />
      <CharList :charList="charList" />
    </UContainer>
  </div>
</template>


