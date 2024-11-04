<template>
  <header class="bg-zinc-100 border-b border-b-zinc-200 dark:bg-emerald-700 dark:border-b-emerald-600 py-8">
    <UContainer class="flex items-center">
      <nav>
        <ul class="flex gap-2">
          <li>
            <ApplicationHeaderLink to="/" label="Home" />
          </li>
          <li>
            <ApplicationHeaderLink to="/rick-and-morty" label="Rick and Morty" />
          </li>
          <li>
            <ApplicationHeaderLink to="/pokemon" label="Pokemon" />
          </li>
        </ul>
      </nav>
    </UContainer>
  </header>
</template>
