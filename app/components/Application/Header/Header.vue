<script setup lang="ts">
const isMenuOpen = ref(false)
const toggleMenu = () => (isMenuOpen.value = !isMenuOpen.value)

const horizontalLinks = [
  { label: 'Home', to: '/' },
  { label: 'Rick and Morty', to: '/rick-and-morty' },
  { label: 'Pokemon', to: '/pokemon' },
  { label: 'Elden Ring', to: '/elden-ring' },
]
const verticalLinks = [...horizontalLinks]
</script>

<template>
  <header class="bg-zinc-100 border-b border-b-zinc-200 dark:bg-emerald-700 dark:border-b-emerald-600 py-8">
    <UContainer class="flex items-center">
      <nav>
        <UButton class="block md:hidden" @click="toggleMenu()">
          <Icon :name="isMenuOpen ? 'pajamas:close' : 'pajamas:hamburger'" class="w-4 h-4 mt-1" />
        </UButton>
        <div class="hidden md:flex">
          <UHorizontalNavigation :links="horizontalLinks">
            <template #default="{ link }">
              <span class="group-hover:text-primary text-cyan-50 relative">{{ link.label }}</span>
            </template>
          </UHorizontalNavigation>
        </div>
        <div v-if="isMenuOpen" class="flex flex-col md:hidden p-4">
          <UVerticalNavigation :links="verticalLinks">
            <template #default="{ link }">
              <span class="group-hover:text-primary text-cyan-50 relative">{{ link.label }}</span>
            </template>
          </UVerticalNavigation>
        </div>
      </nav>
    </UContainer>
  </header>
</template>
