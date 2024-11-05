import type { DataTransformer } from '~/types/data-transformer';
import type { Universe } from '~/types';
import { PokemonCharTransformer } from '~/domain/pokemon/api-transformer';
import { RickAndMortyCharTransformer } from '~/domain/rick-and-morty/api-transformer';

export const useUniverseChar = async (universe: Universe, charId: string | number) => {
  let charDetails: DataTransformer | null = null;
  if (universe === 'rick-and-morty') {
    const { data } = await useRickAndMortyData(`character/${charId}`);
    const response = await data?.value;
    charDetails = RickAndMortyCharTransformer(response);
  } else if (universe === 'pokemon') {
    const { data } = await usePokemonData(`pokemon/${charId}`);
    const response = await data?.value;
    charDetails = PokemonCharTransformer(response);
  }

  return { charDetails };
};