<script setup lang="ts">
import type { DataTransformer } from '~/types/data-transformer'

const props = defineProps<{
  charList: DataTransformer[]
}>()
</script>

<template>
  <div v-if="props.charList.length" class="grid gap-4 xl:grid-cols-3">
    <ULink v-for="char in props.charList" :key="char.id" :to="char.url">
      <Card :title="char.name" :img="char.image" image-size="cover" />
    </ULink>
  </div>
  <div v-else>
    <p> No characters found.</p>
  </div>
</template>
