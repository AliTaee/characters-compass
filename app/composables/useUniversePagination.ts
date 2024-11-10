import { PokemonDataTransformer } from '~/domain/pokemon/api-transformer'
import { RickAndMortyDataTransformer } from '~/domain/rick-and-morty/api-transformer'
import type { Universe } from '~/types'
import type { DataTransformer } from '~/types/data-transformer'

export async function useUniversePagination(universe: Universe, page: number = 1) {
  const charList: DataTransformer[] = []
  let universeTitle = ''
  let totalItems = 0

  async function fetchData(page: number = 1) {
    try {
      if (universe === 'rick-and-morty') {
        universeTitle = 'Rick and Morty'
        const response = await $rickAndMorty(`character?page=${page}`)
        totalItems = response?.info.count
        charList.push(...RickAndMortyDataTransformer(response?.results || []))
      }
      else if (universe === 'pokemon') {
        universeTitle = 'Pokemon'
        const offset = (page - 1) * 20
        const response = await $pokemon(`pokemon?offset=${offset}&limit=20`)
        totalItems = response?.count
        charList.push(...PokemonDataTransformer(response?.results || []))
      }
      else {
        universeTitle = 'Unknown Universe'
      }
    }
    catch (error) {
      console.error('Failed to fetch data:', error)
    }
  }

  await fetchData(page)

  return {
    charList,
    universeTitle,
    totalItems,
  }
}
