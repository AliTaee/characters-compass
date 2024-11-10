<template>
  <div class="py-8">
    <UContainer>
      <ApplicationPageHeader title="Welcome to the Characters compass! Explore characters of different universes." />
      <div class="grid gap-4 xl:grid-cols-2">
        <ULink to="/rick-and-morty">
          <Card title="Rick and Morty" img="/images/wallpaper/rick-and-morty.jpg" image-size="cover" />
        </ULink>
        <ULink to="/pokemon">
          <Card title="Pokemon" img="/images/wallpaper/pokemon.jpg" image-size="cover" />
        </ULink>
        <ULink to="/elden-ring">
          <Card title="Elden Ring Bosses" img="/images/wallpaper/elden-ring-game-art-boss.jpg" image-size="cover" />
        </ULink>
      </div>
    </UContainer>
  </div>
</template>
