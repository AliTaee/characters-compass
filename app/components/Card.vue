<script setup lang="ts">
const props = defineProps<{
  title: string,
  img: string,
  imageSize: 'cover' | 'square'
}>()
const imageSrc = ref(props.img)

function handleImageError() {
  imageSrc.value = `https://placehold.co/475/047857/FFF?text=${props.title}`
}

watch(() => props.img, (newImg) => {
  imageSrc.value = newImg
})
</script>

<template>
  <section
    class="rounded shadow shadow-slate-100 dark:shadow-slate-900 bg-slate-200 dark:bg-slate-800 border border-slate-500 dark:border-slate-600">
    <header class="border-b border-b-slate-200 dark:border-b-slate-600 p-4">
      <h2 class="text-center text-2xl font-bold tracking-wide text-slate-700 dark:text-slate-300 truncate">
        {{ props.title }}
      </h2>
    </header>
    <div class="p-4">
      <NuxtImg :src="imageSrc" :alt="props.title" :class="[
        'w-full object-cover mb-4', imageSize === 'cover' ? 'h-64' : 'h-128'
      ]" @error="handleImageError" />
    </div>
  </section>
</template>