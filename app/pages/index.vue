<template>
  <div class="py-8">
    <UContainer>
      <header class="border-b mb-8 py-2 text-xl">
        <h1>
          Welcome to the Characters compass! Explore characters of different universes.
        </h1>
      </header>
      <div class="grid gap-4 xl:grid-cols-2">
        <ULink to="/rick-and-morty">
          <Card title="Rick and Morty" img="/images/wallpaper/rick-and-morty.png" image-size="cover" />
        </ULink>
        <ULink to="/pokemon">
          <Card title="Pokemon" img="/images/wallpaper/pokemon.png" image-size="cover" />
        </ULink>
      </div>
    </UContainer>
  </div>
</template>
