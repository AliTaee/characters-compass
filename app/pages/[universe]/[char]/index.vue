<script setup lang="ts">
import { useRoute } from 'vue-router'
import { useUniverseChar } from '~/composables/useUniverseChar'
import type { Universe } from '~/types'

interface RouteParams {
  char: string
  universe: string
}

const route = useRoute()
const { char, universe } = route.params as RouteParams

useHead({
  title: `Page details | ${char}`,
  meta: [
    {
      name: 'description',
      content: `Find more information about ${char}`,
    },
  ],
})

const { charDetails, errorTitle } = await useUniverseChar(universe as Universe, char)
</script>

<template>
  <div class="py-8">
    <UContainer>
      <ApplicationPageHeader :title="!errorTitle ? 'Char Detail page' : 'failed to load char data'" />
    </UContainer>
    <UContainer>
      <div class="grid gap-4 xl:grid-cols-2">
        <Card v-if="charDetails" image-size="square" :title="charDetails.name" :img="charDetails.image" />
        <CharDetailList :attributes="charDetails?.attributes" />
      </div>
    </UContainer>
  </div>
</template>
