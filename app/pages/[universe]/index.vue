<script setup lang="ts">
import { useRoute } from 'vue-router'
import { useUniversePagination } from '~/composables/useUniversePagination'
import type { Universe } from '~/types'

interface RouteParams {
  universe: string
}

const route = useRoute()
const { universe } = route.params as RouteParams

const columns = ref(2)

useHead({
  title: `${universe} Universe`,
  meta: [
    {
      name: 'description',
      content: `Explore the ${universe} universe`,
    },
  ],
})

const { charList, universeTitle, totalItems, currentPage } = await useUniversePagination(universe as Universe)
</script>

<template>
  <div class="py-8">
    <UContainer>
      <PageHeader :title="`${universeTitle} list of characters`">
        <div class="flex items-center gap-4">
          <ToggleListLayout v-model:grid-layout="columns" />
          <UPagination v-model="currentPage" :page-count="20" :total="totalItems" />
        </div>
      </PageHeader>
      <CharList :char-list="charList" :columns="columns" />
    </UContainer>
  </div>
</template>
