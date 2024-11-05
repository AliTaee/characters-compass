import { RickAndMortyDataTransformer } from '~/domain/rick-and-morty/api-transformer';
import { PokemonDataTransformer } from '~/domain/pokemon/api-transformer';
import type { DataTransformer } from '~/types/data-transformer';
import type { Universe } from '~/types';

export const useUniverseData = async (universe: Universe) => {
  let charList = ref<DataTransformer[]>([]) 
  let universeTitle = ref('');  
  const currentPage = ref(1)
  const totalItems = ref(0)

  async function fetchData(paginationUrl?: string) {
    if (universe === 'rick-and-morty') {
      universeTitle.value = 'Rick and Morty';
      const { data } = await useRickAndMortyData(paginationUrl ?? "character");
      totalItems.value = data?.value?.info.count;
      const response = await data?.value as unknown as { results: any[] } || [];
      charList.value = RickAndMortyDataTransformer(response.results);
    } else if (universe === 'pokemon') {
      universeTitle.value = 'Pokemon';
      const { data } = await usePokemonData(paginationUrl ?? 'pokemon');
      totalItems.value = data?.value?.count;
      const response = await data?.value as unknown as { results: any[] } || [];
      charList.value = PokemonDataTransformer(response.results);
    } else {
      // Handle unsupported universe case
      universeTitle.value = 'Unknown Universe';
      charList.value = [];
    }
  }

  async function handlePaginationCourser(page: number) {
    if (universe === 'rick-and-morty') {
      await fetchData(`character?page=${page}`);
    } else if (universe === 'pokemon') {
      await fetchData(`pokemon?offset=${page * 20 - 20}&limit=20`);
    }
  } 

  watch(currentPage, (newPage) => {
    handlePaginationCourser(newPage)
  })

  // Fetch initial data
  await fetchData()

  return {
    charList,
    currentPage,
    universeTitle,
    totalItems: totalItems.value,
  };
};