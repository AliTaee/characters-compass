<script setup lang="ts">
import { useRoute, useRouter } from 'vue-router'
import { useUniversePagination } from '~/composables/useUniversePagination'
import { charactersPerPage } from '~/constants'
import { useLayoutStore } from '~/stores/grid-layout'
import type { ToggleLayoutType, Universe } from '~/types'

interface RouteParams {
  universe: string
}

const route = useRoute()
const router = useRouter()

const { universe } = route.params as RouteParams
const currentPage = ref(Number(route.query.page) || 1)

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

function handleGridLayoutChange(newColumns: ToggleLayoutType) {
  layoutStore.setColumns(newColumns)
}

const { data: paginationData, refresh } = await useAsyncData(
  'universePaginationData',
  () => useUniversePagination(universe as Universe, currentPage.value),
)

const charList = computed(() => paginationData.value?.charList || [])
const universeTitle = computed(() => paginationData.value?.universeTitle || '')
const totalItems = computed(() => paginationData.value?.totalItems || 0)

watch(currentPage, () => {
  refresh()
  router.replace({ query: { page: currentPage.value } })
})
</script>

<template>
  <div class="py-8">
    <UContainer>
      <ApplicationPageHeader :title="`${universeTitle} list of characters`">
        <div class="flex flex-col gap-3 md:flex-row md:items-center justify-between">
          <CharListToggleLayout :type="layoutStore.columns" @grid-layout-changed="handleGridLayoutChange" />
          <UPagination
            v-model="currentPage" :page-count="charactersPerPage" :total="totalItems"
          />
        </div>
      </ApplicationPageHeader>
      <CharList :char-list="charList" :columns="layoutStore.columns" />
    </UContainer>
  </div>
</template>
