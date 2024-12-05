<script setup lang="ts">
import type { ToggleLayoutType } from '~/types'
import type { DataTransformer } from '~/types/data-transformer'

const props = defineProps<{
  charList: DataTransformer[]
  columns: ToggleLayoutType
}>()

const gridColumnsClass = computed(() => {
  return props.columns === 'list' ? 'grid-cols-1' : 'grid-cols-1 md:grid-cols-2 xl:grid-cols-3'
})
</script>

<template>
  <div v-if="props.charList.length && columns === 'grid'" class="grid gap-4" :class="[gridColumnsClass]">
    <ULink v-for="char in props.charList" :key="char.id" :to="char.url">
      <Card :title="char.name" :img="char.image" image-size="cover" />
    </ULink>
  </div>
  <CharListItem
    v-for="char in props.charList"
    v-else-if="props.charList.length && columns === 'list'"
    :key="char.id"
    :title="char.name"
    :link="char.url"
  />
  <div v-if="props.charList.length === 0">
    <p> No characters found.</p>
  </div>
</template>
