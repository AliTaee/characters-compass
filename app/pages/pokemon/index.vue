<script setup lang="ts">
import { PokemonDataTransformer } from './data-transformer'

useHead({
  title: 'Pokemon universe',
  meta: [
    {
      name: 'description',
      content: 'Explore the Pokemon universe'
    }
  ]
})

const { data } = await usePokemonData('pokemon')
const response = await data?.value as unknown as { results: any[] } || []
const charList =  PokemonDataTransformer(response.results)
</script>

<template>
    <div class="py-8">
      <UContainer>
        <PageHeader title="Pokemon" />
        <CharList :charList="charList" />
      </UContainer>
    </div>
  </template>
  