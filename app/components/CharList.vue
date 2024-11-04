<script setup lang="ts">
import type {DataTransformer} from '~/types/data-transformer'


const props = defineProps<{
    charList: DataTransformer[]
}>()
</script>

<template>
    <div v-if="charList.length" class="grid gap-4 xl:grid-cols-2">
        <PageSection v-for="char in charList" :title="char.name" :img="char.image" :id="char.id" link="#" />
    </div>
    <div v-else>
        <p> No characters found.</p>
    </div>
</template>
