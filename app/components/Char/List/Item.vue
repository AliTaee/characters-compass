<script setup lang="ts">
const props = defineProps<{
  title: string
  link: string
}>()
</script>

<template>
  <section
    class="flex justify-between items-center p-4 rounded shadow shadow-slate-100 dark:shadow-slate-900 bg-slate-200 dark:bg-slate-800 border border-slate-500 dark:border-slate-600 mb-2"
  >
    <header class="border-b-slate-200 dark:border-b-slate-600">
      <h2 data-testid="card-title" class="text-center text-base font-bold tracking-wide text-slate-700 dark:text-slate-300 truncate">
        {{ props.title }}
      </h2>
    </header>
    <ULink :to="props.link">
      Detail page
    </ULink>
  </section>
</template>
