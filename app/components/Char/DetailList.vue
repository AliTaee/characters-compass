<script setup lang="ts">
import type { CharAttributes } from '~/types/data-transformer'

const props = defineProps<{
  attributes?: CharAttributes
}>()
</script>

<template>
  <div
    v-if="attributes" data-testid="attributes"
    class="rounded shadow shadow-slate-100 dark:shadow-slate-900 bg-slate-200 dark:bg-slate-800 border border-slate-500 dark:border-slate-600 p-4"
  >
    <ul>
      <li
        v-for="(attribute, index) in props.attributes" :key="index"
        class="flex flex-col xl:flex-row xl:gap-10 justify-between border-b border-gray-200 py-2 last:border-b-0"
      >
        <span data-testid="attribute-key" class="font-semibold min-w-24 capitalize text-slate-700 dark:text-slate-300">
          {{ Object.keys(attribute)[0] }}:
        </span>
        <span data-testid="attribute-value" class="text-slate-700 dark:text-slate-300">
          {{ Object.values(attribute)[0] }}
        </span>
      </li>
    </ul>
  </div>
</template>
