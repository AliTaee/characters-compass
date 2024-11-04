<script setup lang="ts">
import { RickAndMortyDataTransformer } from './data-transformer'


useHead({
  title: 'Rick and Morty universe',
  meta: [
    {
      name: 'description',
      content: 'Explore the Rick and Morty universe'
    }
  ]
})

const { data } = await useRickAndMortyData('character')
const response = await data?.value as unknown as { results: any[] } || []
const charList =  RickAndMortyDataTransformer(response.results)
</script>

<template>
    <div class="py-8">
      <UContainer>
        <PageHeader title="Rick and Morty" />
        <CharList :charList="charList" />
      </UContainer>
    </div>
  </template>
  