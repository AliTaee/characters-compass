import { RickAndMortyDataTransformer, PokemonDataTransformer } from '~/utils/data-transformer';
import type { DataTransformer } from '~/types/data-transformer';
import type { Universe } from '~/types';


export const useUniverseData = async (universe: Universe) => {
  let charList: DataTransformer[] = [];
  let universeTitle = '';

  if (universe === 'rick-and-morty') {
    universeTitle = 'Rick and Morty';
    const { data } = await useRickAndMortyData('character');
    const response = await data?.value as unknown as { results: any[] } || [];
    charList = RickAndMortyDataTransformer(response.results);
  } else if (universe === 'pokemon') {
    universeTitle = 'Pokemon';
    const { data } = await usePokemonData('pokemon');
    const response = await data?.value as unknown as { results: any[] } || [];
    charList = PokemonDataTransformer(response.results);
  } else {
    // Handle unsupported universe case
    universeTitle = 'Unknown Universe';
    charList = [];
  }

  return { charList, universeTitle };
};