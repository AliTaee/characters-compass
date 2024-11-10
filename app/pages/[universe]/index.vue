<script setup lang="ts">
import { useRoute, useRouter } from 'vue-router'
import { useUniversePagination } from '~/composables/useUniversePagination'
import { useLayoutStore } from '~/stores/grid-layout'
import type { Universe } from '~/types'

interface RouteParams {
  universe: string
}

const route = useRoute()
const router = useRouter()

const { universe } = route.params as RouteParams
const page = computed(() => Number(route.query.page) || 1)
const currentPage = ref(1)

const layoutStore = useLayoutStore()

useHead({
  title: `${universe} Universe`,
  meta: [
    {
      name: 'description',
      content: `Explore the ${universe} universe`,
    },
  ],
})

function handleGridLayoutChange(newColumns: number) {
  layoutStore.setColumns(newColumns)
}

const { data: paginationData, refresh } = await useAsyncData(
  'universePaginationData',
  () => useUniversePagination(universe as Universe, page.value),
)

const charList = computed(() => paginationData.value?.charList || [])
const universeTitle = computed(() => paginationData.value?.universeTitle || '')
const totalItems = computed(() => paginationData.value?.totalItems || 0)

watch(page, () => refresh())
</script>

<template>
  <div class="py-8">
    <UContainer>
      <ApplicationPageHeader :title="`${universeTitle} list of characters`">
        <div class="flex items-center gap-4">
          <CharListToggleLayout :columns="layoutStore.columns" @grid-layout-changed="handleGridLayoutChange" />
          <UPagination
            v-model="currentPage" :page-count="20" :total="totalItems" :to="(newPage: number) => {
              router.push({ query: { ...route.query, page: newPage - 1 } })
            }"
          />
        </div>
      </ApplicationPageHeader>
      <CharList :char-list="charList" :columns="layoutStore.columns" />
    </UContainer>
  </div>
</template>
