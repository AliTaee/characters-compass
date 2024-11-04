<template>
  <footer class="bg-zinc-100 border-t border-t-zinc-200 dark:bg-emerald-700 dark:border-t-emerald-600 py-8">
    <UContainer class="text-center">
      Design and develop by Ali Taei &copy; {{ year }} - With <UIcon name="i-logos:nuxt-icon" class="w-4 h-4" />
      and <UIcon name="i-heroicons-solid:heart" class="w-4 h-4" />
    </UContainer>
  </footer>
</template>

<script>
export default {
  computed: {
    year() {
      return new Date().getFullYear();
    }
  }
}
</script>