<script setup lang="ts">
const props = defineProps<{
  title: string
}>()
</script>

<template>
  <header class="flex flex-col gap-2 md:flex-row md:items-center justify-between border-b mb-8 py-2 text-xl">
    <h1>
      {{ props.title }}
    </h1>
    <slot />
  </header>
</template>
