import { getPokemonCharList } from '~/domain/pokemon/api-list'
import { getRickAndMortyCharList } from '~/domain/rick-and-morty/api-list'
import type { Universe } from '~/types'
import type { DataTransformer } from '~/types/data-transformer'

export async function useUniversePagination(universe: Universe, page: number = 1) {
  const charList: DataTransformer[] = []
  let universeTitle = ''
  let totalItems = 0

  async function fetchData(page: number = 1) {
    try {
      if (universe === 'rick-and-morty') {
        const response = await getRickAndMortyCharList(page)
        charList.push(...response.carList)
        totalItems = response.total
        universeTitle = response.title
      }
      else if (universe === 'pokemon') {
        const response = await getPokemonCharList(page)
        charList.push(...response.carList)
        totalItems = response.total
        universeTitle = response.title
      }
      else {
        universeTitle = 'Unknown Universe'
      }
    }
    catch (error) {
      const errorMessage = 'Failed to fetch data'
      console.error(`${errorMessage}:`, error)
      universeTitle = errorMessage
    }
  }

  await fetchData(page)

  return {
    charList,
    universeTitle,
    totalItems,
  }
}
